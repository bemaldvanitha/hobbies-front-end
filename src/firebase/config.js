import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC7GT-vf5ikLjpc3qFVU8kkuaYvXuHdxqQ",
    authDomain: "code-pro-d7581.firebaseapp.com",
    projectId: "code-pro-d7581",
    storageBucket: "code-pro-d7581.appspot.com",
    messagingSenderId: "329555898680",
    appId: "1:329555898680:web:6d81bfcec618aebbcd51cd",
    measurementId: "G-EVE3F2E5CD"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export {
    projectStorage
}