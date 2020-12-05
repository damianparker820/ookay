import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCNqEpX_Wwswf43u78Zm2yNzR4fza5NE18",
    authDomain: "dump-b36ba.firebaseapp.com",
    databaseURL: "https://dump-b36ba.firebaseio.com",
    projectId: "dump-b36ba",
    storageBucket: "dump-b36ba.appspot.com",
    messagingSenderId: "219507049560",
    appId: "1:219507049560:web:7d2289027ce4c7a51e762d"
  };
  firebase.initializeApp(firebaseConfig)
   
export default firebase;