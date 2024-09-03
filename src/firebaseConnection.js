import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCm0DR3IQxSw6utGycIswpISMMiS2S_9Q8",
  authDomain: "bancoodaturmab.firebaseapp.com",
  projectId: "bancoodaturmab",
  storageBucket: "bancoodaturmab.appspot.com",
  messagingSenderId: "357533592825",
  appId: "1:357533592825:web:818afe75a1113b235b0628"
}

const firebaseapp =  initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};