import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfAVBLp9ItJdX62fme1Ve9N2uiv8OFNVQ",
    authDomain: "optquick-3260e.firebaseapp.com",
    projectId: "optquick-3260e",
    storageBucket: "optquick-3260e.appspot.com",
    messagingSenderId: "892205309709",
    appId: "1:892205309709:web:4058f7425575d9253d9a44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;