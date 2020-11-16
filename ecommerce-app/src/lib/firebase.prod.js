import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBbFRxyd3H6a5SLUposSBPewwO1Y13LQQ0",
  authDomain: "ecommerce-app-58214.firebaseapp.com",
  databaseURL: "https://ecommerce-app-58214.firebaseio.com",
  projectId: "ecommerce-app-58214",
  storageBucket: "ecommerce-app-58214.appspot.com",
  messagingSenderId: "93781305506",
  appId: "1:93781305506:web:15d4a6891f836f66804ffb",
  measurementId: "G-YHBJT55R4K",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
