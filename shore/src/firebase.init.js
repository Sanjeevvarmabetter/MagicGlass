import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9z5DJ547BoyeUS2b2K_knghAXUnKokfE",
  authDomain: "shorehackthon.firebaseapp.com",
  projectId: "shorehackthon",
  storageBucket: "shorehackthon.appspot.com",
  messagingSenderId: "125070930407",
  appId: "1:125070930407:web:d4f9e2c99ce9e5f8c88d42",
  measurementId: "G-38MZZH20J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;