// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmw_AeAy6SH5JiQRXswO36vpPKj5G8VUY",
  authDomain: "hardy-notch-261718.firebaseapp.com",
  databaseURL: "https://hardy-notch-261718.firebaseio.com",
  projectId: "hardy-notch-261718",
  storageBucket: "hardy-notch-261718.appspot.com",
  messagingSenderId: "1004370003740",
  appId: "1:1004370003740:web:7b0aba5658bf09d0815cd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app.options);
