import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './drrPrank'
import './main.css'
import { initializeApp } from "firebase/app";
const firebaseConfig = {

    apiKey: "AIzaSyAAHqjy3x-lqLUZXsIaQh9UxF9NgsdJN_U",
  
    authDomain: "drralpha-d060d.firebaseapp.com",
  
    projectId: "drralpha-d060d",
  
    storageBucket: "drralpha-d060d.appspot.com",
  
    messagingSenderId: "342621170320",
  
    appId: "1:342621170320:web:3b97b0e4cb63afa29bc615"
  
  };
  
  const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('drr')).render(
    <App />
)
