// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBVU3KjJ4rnuN4LuZI2yDA1Cr2jG7Zc2YU",
    authDomain: "letschatapp-29c00.firebaseapp.com",
    databaseURL: "https://letschatapp-29c00-default-rtdb.firebaseio.com",
    projectId: "letschatapp-29c00",
    storageBucket: "letschatapp-29c00.appspot.com",
    messagingSenderId: "1048121382738",
    appId: "1:1048121382738:web:8faf9ba7f60a4fe1314c8b"
  };

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}


