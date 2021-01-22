import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyFVHH7GX6cTKxatMcBv6ONCY83odtLIU",
    authDomain: "admin-labb-react.firebaseapp.com",
    projectId: "admin-labb-react",
    storageBucket: "admin-labb-react.appspot.com",
    messagingSenderId: "441170868387",
    appId: "1:441170868387:web:ffd1f484f76e372b26a716"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore()
export default firebase;