import React from "react";
import styles from "./first.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      {/* <img src="../assets/" alt="" /> */}
      <nav className={styles.mainNavbar}>
        <div className={styles.logo}>We Together</div>

        <div className={styles.lists}>
        <div className={styles.item}><a href="#">Home</a></div>
<div className={styles.item}><a href="#">Inspiration</a></div>
<div className={styles.item}><a href="#">Quotes</a></div>
<div className={styles.item}><a href="#">Footer</a></div>
        </div>
        <div className={styles.logout}>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className={styles.logoutButton}
          >
            Log In
          </button>
        </div>
      </nav>
      <img
        className={styles.zigzag}
        src="https://i.postimg.cc/G3jpDjn5/Vector-61-1.png"
        alt=""
      />

      <div className={`${styles.headingContainer} `}>
        <img
          className={styles.arrow1}
          src="https://i.postimg.cc/c1X6tcQL/Vector-8.png"
          alt=""
        />
        <div className={`${styles.heading} `}>
          <span className={styles.active}>We Together</span> - Let's talk about
          your problems ! <br />
          <span className={styles.active}>No need to fight alone</span>
        </div>
        <div className={`${styles.subheading} `}>
          We all get muddled or overwhelmed by life at times, seek help in the
          community and be someone's light in their time of darkness.
        </div>
        {/* <div id={styles.test}>Testing</div> */}
        <button
          onClick={() => {
            navigate("/register");
          }}
          className={styles.getStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;