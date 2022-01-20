import React from "react";
import image from "../assets/womanwithphone.jpg";
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
        <button
          className="auth"
          style={styles.signIn}
          onClick={handleGoogleSignIn}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;

const styles = {
  main: {
    backgroundImage: `url(${image})`,
  },
  container: {
    height: "100vh",
    width: "50%",
    background: "rgb(37, 39, 60)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    width: "40%",
    height: 50,
    borderRadius: 30,
    border: "none",
    color: "white",
    background: "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
  },
};
