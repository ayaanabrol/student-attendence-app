import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBrm4uRvpHm8xByerLIqx3QyB8S_OCN3wo",
    authDomain: "student-attendance-app-a7059.firebaseapp.com",
    databaseURL: "https://student-attendance-app-a7059-default-rtdb.firebaseio.com",
    projectId: "student-attendance-app-a7059",
    storageBucket: "student-attendance-app-a7059.appspot.com",
    messagingSenderId: "334572148674",
    appId: "1:334572148674:web:f3bdb21a3406cc2890a85b",
    measurementId: "G-X7661ZM7LV"
  };

// Initialize Firebase
if (!firebase.apps.length) {{
  
}
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
