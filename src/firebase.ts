import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACnEMX6ZVAsO8E-Sd-mkRZp6kpAIYln3c",
  authDomain: "nwitter-reloaded-8f212.firebaseapp.com",
  projectId: "nwitter-reloaded-8f212",
  storageBucket: "nwitter-reloaded-8f212.appspot.com",
  messagingSenderId: "935124824347",
  appId: "1:935124824347:web:02369dff437279b4c3e3be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
