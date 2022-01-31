import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWb4EDndm46ulKKw8Mp7iYrWfU_4r0Vgs",
  authDomain: "recettes-app-52f3a.firebaseapp.com",
  databaseURL: "https://recettes-app-52f3a-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
