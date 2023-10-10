// Your web app's Firebase configuration

import firebase from  "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDB9OmX04M2BuZ3ag8e6cJEv_C7fPgPazY",
    authDomain: "linkedin-clone-yt-f4e15.firebaseapp.com",
    projectId: "linkedin-clone-yt-f4e15",
    storageBucket: "linkedin-clone-yt-f4e15.appspot.com",
    messagingSenderId: "215765486468",
    appId: "1:215765486468:web:0bc73be880541e11f7abd1"
  
};
 
 //this special line of code here connect everything
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  //Gets the  firebase database
  const db =  firebaseApp.firestore();

  export { db }