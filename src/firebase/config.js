import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN ,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET ,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//Para generar el .env

//VITE_API_KEY = AIzaSyBrhGT6Joaj-wiQBmC5aZNm5j4F7QqaP4Q
//VITE_AUTH_DOMAIN = proyectofinal-9b6fa.firebaseapp.com
//VITE_PROJECT_ID = proyectofinal-9b6fa
//VITE_STORAGE_BUCKET = proyectofinal-9b6fa.appspot.com
//VITE_MESSAGING_SENDER_ID = 16964847248
//VITE_APP_ID = 1:16964847248:web:7e8c06df0cefb20da0fa15