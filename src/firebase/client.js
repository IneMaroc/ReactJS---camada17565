import firebase from "firebase/firebase/app";
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD2MS429DXPAuR7yZ_Mtwylv6Oo2z08W5A",
    authDomain: "my-store---ine-maroc---coder.firebaseapp.com",
    projectId: "my-store---ine-maroc---coder",
    storageBucket: "my-store---ine-maroc---coder.appspot.com",
    messagingSenderId: "902666839489",
    appId: "1:902666839489:web:41f942cf68d341f68e7b40"
});

export const getFirebase = () => {
    return firebaseConfig
}

// funciones de firebase
export const getFireStore = () => {
    return firebase.firestore(firebaseConfig)
}