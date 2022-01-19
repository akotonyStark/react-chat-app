import React from 'react'
import image from '../assets/womanwithphone.jpg'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyC9RsuqOVXfLglItriVhocSxBVzSuJQh_w',
  authDomain: 'react-chat-app-116b8.firebaseapp.com',
  projectId: 'react-chat-app-116b8',
  storageBucket: 'react-chat-app-116b8.appspot.com',
  messagingSenderId: '436996486102',
  appId: '1:436996486102:web:7d4d96e4c268fe94e86a77',
  measurementId: 'G-H9DXBQBBV9',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function Login() {
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <button style={styles.signIn} onClick={handleGoogleSignIn}>
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login

const styles = {
  main: {
    backgroundImage: `url(${image})`,
  },
  container: {
    height: '100vh',
    width: '50%',
    background: 'rgb(37, 39, 60)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    width: '40%',
    height: 50,
    borderRadius: 30,
    color: 'white',
    background: 'linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))',
  },
}
