import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import DashBoard from "./Pages/DashBoard";

import Login from "./Pages/Login";

import Error from "./Pages/Error";
import { useContext } from "react";
import { AuthContext } from "./Components/AuthContext/AuthContext";
import Chats from "./Components/Chats/Chats";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
    
     
      <Route
        exact
        path="/"
        element={user ? <Navigate to="/dashboard"/> : <Homepage/>}
      ></Route>
      <Route
        exact
        path="/register"
        element={!user ? <Register /> : <Navigate to="/dashboard" />}
      ></Route>

      <Route
        exact
        path="/login"
        element={!user ? <Login /> : <Navigate to="/dashboard" />}
      ></Route>

     

      {user && (
        <>
          <Route exact path="/dashboard" element={<DashBoard />}></Route>
        </>
      )}
    </Routes>
  );
}

export default App;
