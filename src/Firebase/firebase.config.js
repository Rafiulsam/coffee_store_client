// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW-8tqzISFu_YkFY6jBeeTBYhpx51hEhE",
    authDomain: "coffee-store-57039.firebaseapp.com",
    projectId: "coffee-store-57039",
    storageBucket: "coffee-store-57039.firebasestorage.app",
    messagingSenderId: "689443196508",
    appId: "1:689443196508:web:dbc571ff4a23e6c545a099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth