import React from "react";
import image from "../assets/womanwithphone.jpg";

function Login() {
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <button style={styles.signIn}>Login with Google</button>
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
    color: "white",
    background: "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
  },
};
