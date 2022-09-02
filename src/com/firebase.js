// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider,signInWithRedirect} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnq3jxJPLAHZVzM7dbVK6fYc_zWAwuCPA",
  authDomain: "c1com-fae54.firebaseapp.com",
  projectId: "c1com-fae54",
  storageBucket: "c1com-fae54.appspot.com",
  messagingSenderId: "985908238030",
  appId: "1:985908238030:web:e0271c2dde819fc179629f",
  measurementId: "G-J42CTXNDCQ"
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export const Signupa= ()=>{
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
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}