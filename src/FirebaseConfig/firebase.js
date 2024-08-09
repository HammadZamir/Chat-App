import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBdWocY1Ydvpe5hHgXL0jN8s9G2vPmqBXo",
  authDomain: "chat-application-94034.firebaseapp.com",
  databaseURL: "https://chat-application-94034-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "chat-application-94034",
  storageBucket: "chat-application-94034.appspot.com",
  messagingSenderId: "640612590665",
  appId: "1:640612590665:web:7921548b165fb6f1698b98",
  measurementId: "G-TM0LLE198T"
};



const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);





// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBdWocY1Ydvpe5hHgXL0jN8s9G2vPmqBXo",
//   authDomain: "chat-application-94034.firebaseapp.com",
//   databaseURL: "https://chat-application-94034-default-rtdb.firebaseio.com",
//   projectId: "chat-application-94034",
//   storageBucket: "chat-application-94034.appspot.com",
//   messagingSenderId: "640612590665",
//   appId: "1:640612590665:web:7921548b165fb6f1698b98",
//   measurementId: "G-TM0LLE198T"
// };