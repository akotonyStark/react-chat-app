import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
 apiKey: "AIzaSyD0bz-iEP2VAiVm8YsXb9s_rn_mDCPuxmc",
  authDomain: "chat-app-react-49373.firebaseapp.com",
  projectId: "chat-app-react-49373",
  storageBucket: "chat-app-react-49373.appspot.com",
  messagingSenderId: "341695279299",
  appId: "1:341695279299:web:e9991bb38c4ff198ebb276",
  measurementId: "G-BW4RHPJ3QP"
})

const auth = firebase.auth()
const db = firebase.firestore()
//const functions = firebase.functions()

export { auth, db, firebase }
