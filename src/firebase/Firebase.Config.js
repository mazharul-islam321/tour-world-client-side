// console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    // apiKey: "AIzaSyBs9YZ4P0h5JIdjImrG3Ri6wcoGAmCQjfM",
    // authDomain: "tour-world-7fcb7.firebaseapp.com",
    // projectId: "tour-world-7fcb7",
    // storageBucket: "tour-world-7fcb7.appspot.com",
    // messagingSenderId: "422980517837",
    // appId: "1:422980517837:web:e35d9acf6d884727798e84",
};

export default firebaseConfig;
