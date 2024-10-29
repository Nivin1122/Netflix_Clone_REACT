import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCElgFprxxnrhqIuLgMAcOgexKtIAKj8wM",
  authDomain: "netflix-project-d3943.firebaseapp.com",
  projectId: "netflix-project-d3943",
  storageBucket: "netflix-project-d3943.appspot.com",
  messagingSenderId: "518025806380",
  appId: "1:518025806380:web:3cf06c98c5679456f5c789"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async(name,email,password ) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider : "local",
            email,
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout };