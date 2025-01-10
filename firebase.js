//Inicializamos Firebase

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export function auth (){
    const auth = getAuth();
    try{
        const result = signInWithPopud(auth, provider);//Ejeruta el proceso de autenticacion

        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;
        const user = result.user;

    }catch(error){
        console.log(error);
    }
}