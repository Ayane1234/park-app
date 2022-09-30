import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCqbOWR1sz9U947aF0y6MFfMTq_F6gSdUY",
  authDomain: "park-app-2022.firebaseapp.com",
  projectId: "park-app-2022",
  storageBucket: "park-app-2022.appspot.com",
  messagingSenderId: "1018745288301",
  appId: "1:1018745288301:web:e041d69b0c3e92d43df164",
  measurementId: "G-2WMFNBPJT5",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
