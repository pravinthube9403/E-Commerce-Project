// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import store from "./Redux/store"
import { setUser,signOut } from "./Redux/store"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8V-Q2cOm-S6GIN6AQVrZRphJ8_mdJYMQ",
  authDomain: "proj-auth-f040f.firebaseapp.com",
  projectId: "proj-auth-f040f",
  storageBucket: "proj-auth-f040f.appspot.com",
  messagingSenderId: "1006539290950",
  appId: "1:1006539290950:web:f5e67dfd51c877b3e98d47",
  measurementId: "G-YKZLEVBR6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
onAuthStateChanged(auth,(user) =>
{
    if (user)
    {
        store.dispatch(setUser({
            email: user.email,
            password:user.password,
            
     }))   
    }
    else
    {
     store.dispatch(signOut())   
    }
})