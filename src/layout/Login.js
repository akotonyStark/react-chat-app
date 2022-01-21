import React from "react";
import image from "../assets/jay.jpg";
import google from "../assets/google.png";
import firebase from "firebase/compat/app";
import { auth } from "../store/firebase.config";

function Login() {
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={styles.buttonWrap}>
          <img src={google} alt="icon" style={styles.google} />
          <button style={styles.signIn} onClick={handleGoogleSignIn}>
            Login with Google
          </button>
        </div>
      </div>
      <div style={styles.landingImage}></div>
    </div>
  );
}

export default Login;

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    height: "100vh",
    width: "50%",
    background: "rgb(37, 39, 60)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  landingImage: {
    height: "100vh",
    width: "50%",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  buttonWrap: {
    width: "40%",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
  },
  signIn: {
    height: 50,
    borderRadius: 30,
    border: "none",
    color: "white",
    background: "none",
    cursor: "pointer",
  },
  google: {
    height: 20,
    width: 20,
  },
};
