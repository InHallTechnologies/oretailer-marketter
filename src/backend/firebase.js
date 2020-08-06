import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD946ykpALzS7a8d-Cx-DlgInQjK01pHXE",
    authDomain: "obuv-marketer.firebaseapp.com",
    databaseURL: "https://obuv-marketer.firebaseio.com",
    projectId: "obuv-marketer",
    storageBucket: "obuv-marketer.appspot.com",
    messagingSenderId: "112634990633",
    appId: "1:112634990633:web:281f6ed195a236ff444c38"
  };
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const firebaseDB = firebase.database();