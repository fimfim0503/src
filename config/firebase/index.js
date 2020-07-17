import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCL9rpVfKnpBTwnsl5qDCu_csmNwfWNXck",
  authDomain: "login-b42bc.firebaseapp.com",
  databaseURL: "https://login-b42bc.firebaseio.com",
  projectId: "login-b42bc",
  storageBucket: "login-b42bc.appspot.com",
  messagingSenderId: "990428605389",
  appId: "1:990428605389:web:8c9e8a93839b1da8cdb284"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;