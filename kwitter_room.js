
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

      apiKey: "AIzaSyB9W4P6Qq64kAyUad55GIVdFed96T_8TE4",
    
      authDomain: "kwitter-df1b8.firebaseapp.com",
    
      databaseURL: "https://kwitter-df1b8-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-df1b8",
    
      storageBucket: "kwitter-df1b8.appspot.com",
    
      messagingSenderId: "1054340201512",
    
      appId: "1:1054340201512:web:7ae6c9d47c69cb0ebb491d",
    
      measurementId: "G-QTVCL0Z2N0"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
