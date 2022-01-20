import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

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
const db = firebase.firestore()

export { auth, db, firebase }
