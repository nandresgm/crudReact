import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDuKu_KghoR1A3viHPb55kwvlUoZsu8HA",
    authDomain: "crudreact-70976.firebaseapp.com",
    projectId: "crudreact-70976",
    storageBucket: "crudreact-70976.appspot.com",
    messagingSenderId: "210101483052",
    appId: "1:210101483052:web:0b7e120d3553fcf271c389"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)