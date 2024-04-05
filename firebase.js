import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCtIqQ2WTDnYBql9F-AYHmAp9COvXIpN1s",
    authDomain: "task-management-35811.firebaseapp.com",
    projectId: "task-management-35811",
    storageBucket: "task-management-35811.appspot.com",
    messagingSenderId: "1095954962251",
    appId: "1:1095954962251:web:a7e7dced484a2c9c743ace"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);