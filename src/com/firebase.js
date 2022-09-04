// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged ,GoogleAuthProvider,signInWithRedirect,signOut,GithubAuthProvider,signInWithPopup,TwitterAuthProvider} from "firebase/auth";
import { useState, } from "react";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set,onDisconnect } from "firebase/database";

import { addDoc, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBnq3jxJPLAHZVzM7dbVK6fYc_zWAwuCPA",
  authDomain: "c1com-fae54.firebaseapp.com",
  projectId: "c1com-fae54",
  storageBucket: "c1com-fae54.appspot.com",
  messagingSenderId: "985908238030",
  appId: "1:985908238030:web:e0271c2dde819fc179629f",
  measurementId: "G-J42CTXNDCQ",
  databaseURL: "https://c1com-fae54-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const providergithub = new GithubAuthProvider();
const providertwiiter = new TwitterAuthProvider();
export const auth = getAuth();
export const database = getDatabase(app);
export const dbRef = ref(getDatabase());

export const Logouta = ()=>{


    signOut(auth).then(() => {
    // Sign-out successful.
    console.log('done')
  }).catch((error) => {
    // An error happened.
  });
  // try {
  //   const docRef =  addDoc(collection(db, "users"), {
  //     first: "Alan",
  //     middle: "Mathison",
  //     last: "Turing",
  //     born: 1912
  //   });
  
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
}

export const Signupa= ()=>{
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  //   console.log('done')
  // }).catch((error) => {
  //   // An error happened.
  // });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid)
      // ...
    } else {
      signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
    
        // ...
      }).catch((error) => {
        // Handle Errors here.
    
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
  });

}
export const Github= ()=>{

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
      // ...
    } else {
      signInWithPopup(auth, providergithub)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
    }
  });

}
export const Twitter= ()=>{

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
      // ...
    } else {
      signInWithPopup(auth, providertwiiter)
      .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;
    
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
      });
    }
  });

}
