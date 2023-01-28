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
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
function add_room()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -" +  Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      lacalStroage.setItem("room_name", name);
      window.location = "chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "chat_room.html";
}
