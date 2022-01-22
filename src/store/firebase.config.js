import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
apiKey: "AIzaSyAts4yYX1e9AS65-vk49aT_V4Y-bZpo1M0",
  authDomain: "rgt-chat-app.firebaseapp.com",
  projectId: "rgt-chat-app",
  storageBucket: "rgt-chat-app.appspot.com",
  messagingSenderId: "659296930195",
  appId: "1:659296930195:web:a5c915d4095ea0b6438066",
  measurementId: "G-X4WW8WTFHJ"
})

const auth = firebase.auth()
const db = firebase.firestore()
//const functions = firebase.functions()

export { auth, db, firebase }
