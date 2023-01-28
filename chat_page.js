const firebaseConfig = {
    apiKey: "AIzaSyC5MX_zGzGDImuzj-V8tP4wSaAIHeiSz4A",
    authDomain: "kwitter-66b67.firebaseapp.com",
    databaseURL: "https://kwitter-66b67-default-rtdb.firebaseio.com",
    projectId: "kwitter-66b67",
    storageBucket: "kwitter-66b67.appspot.com",
    messagingSenderId: "1080280090427",
    appId: "1:1080280090427:web:d4fdf23502ef530041991e"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        });

        document.getElementById("msg").value = "";
    
}

  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> " + name +"</h4>";
message_with_tag ="<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value=" +like+" onclick='updatelike(this.id)'> Likes:"+ like+"</button>";

row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

