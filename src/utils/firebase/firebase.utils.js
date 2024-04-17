import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyDTTovjsGVRGtgrMAo4v6GalOR2bwC2WL4", 
    authDomain: "nexshop-clothing.firebaseapp.com", 
    projectId: "nexshop-clothing", 
    storageBucket: "nexshop-clothing.appspot.com", 
    messagingSenderId: "815334568675", 
    appId: "1:815334568675:web:4462acad992b135e8ccbd6" 
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName,  email } = userAuth;
        const createdAt = new Date();

        try { 
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};
