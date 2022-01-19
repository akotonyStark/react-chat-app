import React, { StrictMode } from 'react'
import './App.css'
import Login from './layout/Login'
import ChatApp from './layout/ChatApp'
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

function App() {
  const [loggedInUser] = useAuthState(auth)
  console.log(loggedInUser)

  return <StrictMode>{loggedInUser ? <ChatApp /> : <Login />}</StrictMode>
}

export default App
