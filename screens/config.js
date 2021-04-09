import firebase from "firebase"
require("@firebase/firestore")

  var firebaseConfig = {
    apiKey: "AIzaSyCI6zQ-tUD5VjQj5Yh8QL6MRfuhGYOIcc4",
    authDomain: "library-app-12be7.firebaseapp.com",
    projectId: "library-app-12be7",
    storageBucket: "library-app-12be7.appspot.com",
    messagingSenderId: "62695200265",
    appId: "1:62695200265:web:565a2ffaceaf0c0ef9cad8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()
