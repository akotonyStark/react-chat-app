import {  auth } from "./store/firebase.config";

export const handleGoogleSignOut = () => {
  if (auth.currentUser) {
    auth.signOut();
  }
};
