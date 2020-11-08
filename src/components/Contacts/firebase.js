import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEo5w_NTRF8LirAOpznQl0YVqrudOmFYw",
    authDomain: "portfolio-messages-db.firebaseapp.com",
    databaseURL: "https://portfolio-messages-db.firebaseio.com",
    projectId: "portfolio-messages-db",
    storageBucket: "portfolio-messages-db.appspot.com",
    messagingSenderId: "935195431158",
    appId: "1:935195431158:web:c5969aafbbe6c771a0dcd7"
})

var db = firebaseApp.firestore()

export { db }
