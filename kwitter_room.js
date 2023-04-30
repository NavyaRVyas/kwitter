
const firebaseConfig = {
      apiKey: "AIzaSyBePxlqpO07eNYrSIzvVlaU-p3Egyhpj9A",
      authDomain: "chirper-slay.firebaseapp.com",
      databaseURL: "https://chirper-slay-default-rtdb.firebaseio.com",
      projectId: "chirper-slay",
      storageBucket: "chirper-slay.appspot.com",
      messagingSenderId: "178394202034",
      appId: "1:178394202034:web:82f871411f95d7f73aeeab",
      
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_room.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log ("Room name -" + Room_names);
       row = "<div class='room_name' id=" + Room_names +" onclick = ' redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;


      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}