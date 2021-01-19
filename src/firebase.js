import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCyFVHH7GX6cTKxatMcBv6ONCY83odtLIU",
    authDomain: "admin-labb-react.firebaseapp.com",
    projectId: "admin-labb-react",
    storageBucket: "admin-labb-react.appspot.com",
    messagingSenderId: "441170868387",
    appId: "1:441170868387:web:ffd1f484f76e372b26a716"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;