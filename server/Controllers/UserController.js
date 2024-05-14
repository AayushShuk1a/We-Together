import User from "../Schema/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const { sign } = jwt;





//Register Person
export const RegisterPerson = async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isMentor: req.body.isMentor,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Login

export const LoginPerson = async (req, res) => {
  

  
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
   

    if (!user) {
      return res.status(401).json({ message: "Wrong Password or Username" });
    }

    if (!user.password) {
      return res.status(401).json({ message: "Password not set for the user" });
    }

    

    if (user.password !== req.body.password) {
      res.status(401).json("Wrong Password or Username");
      return;
    }

    const accessToken = sign(
      { id: user._id, isMentor: user.isMentor},
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password1, ...info } = user._doc;

    

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update
export const UpdateUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        JSON.stringify(req.body.password),
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const data = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
};

//Delete

export const DeleteUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User Deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only delete Your account");
  }
};

//Get single User
export const SingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user;
    res.status(200).json(info);
  } catch (err) {
    res.status(400).json(err);
  }
};

//Get All User

export const AllUsers = async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(query)
        : await User.find();

      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(500).json("Forbidden");
  }
};

//stats
export const UserStats = async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
