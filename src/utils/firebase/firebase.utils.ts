import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User
} from 'firebase/auth';
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot
} from 'firebase/firestore';

import { Category } from "../../store/categories/category.types";

const firebaseConfig = { 
    apiKey: "AIzaSyDTTovjsGVRGtgrMAo4v6GalOR2bwC2WL4", 
    authDomain: "nexshop-clothing.firebaseapp.com", 
    projectId: "nexshop-clothing", 
    storageBucket: "nexshop-clothing.appspot.com", 
    messagingSenderId: "815334568675", 
    appId: "1:815334568675:web:4462acad992b135e8ccbd6" 
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export type objectsToAdd = {
    title: any;
    type: string;
}

export const addCollectionAndDocuments = async <T extends objectsToAdd> (
    collectionKey: string,
    objectsToAdd: T[],
): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('done');
};



export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return  querySnapshot.docs.map(
        docSnapshot => docSnapshot.data() as Category
    );
};

export type AdditionalInformation = { 
    displayName?: string;
}

export type UserData = {
    createAt: Date;
    displayName: string;
    email: string;
}



export const createUserDocumentFromAuth = async (
    userAuth: User,
    AdditionalInformation = {} as AdditionalInformation
):Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try { 
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...AdditionalInformation
            });
        } catch(error) {
            console.log('error creating the user', error);
        }
    }
    return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email:string, password: string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => 
    onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth) => {
            unsubscribe();
            resolve(userAuth);
        },
        reject
    );
    });
};
