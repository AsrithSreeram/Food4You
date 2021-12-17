import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBH89a20HLO52f9i7mSH4qn-gGZTknRoKc",
    authDomain: "food-helper-ea45b.firebaseapp.com",
    projectId: "food-helper-ea45b",
    storageBucket: "food-helper-ea45b.appspot.com",
    messagingSenderId: "353127664438",
    appId: "1:353127664438:web:d2aa69c8b6307ce62e4197",
    measurementId: "G-R425MXVZ0Q"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp)




const signIn = async () => {
  
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const logout = () => {
    auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  };



export {
    auth,
    signIn,
    logout
  };