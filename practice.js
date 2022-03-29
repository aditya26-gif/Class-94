var firebaseConfig = {
    apiKey: "AIzaSyAAM0-7JAHLndfzZD657gLMhkZd7rzRxp0",
    authDomain: "kwitter-96c5b.firebaseapp.com",
    databaseURL: "https://kwitter-96c5b-default-rtdb.firebaseio.com",
    projectId: "kwitter-96c5b",
    storageBucket: "kwitter-96c5b.appspot.com",
    messagingSenderId: "849789190658",
    appId: "1:849789190658:web:b1cc739e220fa51400dd1b",
    measurementId: "G-9FBVQKRBEG"
  };

  // Initialize Firebase
  firebase app = initializeApp(firebaseConfig); 

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
  });
}