//Rotate img on click
function Rotate() {
    var element = document.getElementById('image');

    if (element.className === "normal") {
      element.className = "rotate";
    }
    else if ( element.className === "rotate") {
      element.className = 'normal';
    }
  }


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqetH9NvJx1VeUIXMcA-_eIyMAwvwlwoQ",
  authDomain: "rockpaperscissorshmwk.firebaseapp.com",
  databaseURL: "https://rockpaperscissorshmwk.firebaseio.com",
  projectId: "rockpaperscissorshmwk",
  storageBucket: "rockpaperscissorshmwk.appspot.com",
  messagingSenderId: "488087470983"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialThrow = "";
var yourName = "";
var showThrow = initialThrow;
var playerName = yourName;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a showThrow and playerName stored (first case)
  if (snapshot.child("playerName").exists() && snapshot.child("showThrow").exists()) {
    // Set the variables for playerName/showThrow equal to the stored values.
    playerName = snapshot.val().playerName;
    showThrow = parseInt(snapshot.val().showThrow);

    // Change the text inside the HTML element to reflect the initial value
    $("#player-name").text(snapshot.val().playerName);
    $("#winning-throw").text(snapshot.val().showThrow);

    // Print the data to the console.
    console.log(snapshot.val().playerName);
    console.log(snapshot.val().showThrow);
  }

  // Keep the variables for playerName/showThrow equal to the initial values
  else {

    // Change the HTML to reflect the initial value
    $("#player-name").text(playerName);
    $("#winning-throw").text(showThrow);

    // Print the initial data to the console.
    console.log("Current High Price");
    console.log(playerName);
    console.log(showThrow);
  }

  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the rock, paper, or scissors button

$("#submit-throw").on("click", function() {
  console.log("it works!");
  // Get the input values
  var opponentName = $("#shooter-name").val().trim();
  var throwRock = parseInt($("#rock").val().trim());
  var throwPaper = parseInt($("#paper").val().trim());
  var throwScissors = parseInt($("#scissors").val().trim());

  // Log the Bidder and Price (Even if not the highest)
  console.log(opponentName);
  console.log(opponentThrow);

  if (throwRock === showThrow) {

    // Alert
    alert("It's a tie.");

    // Save the new price in Firebase
    database.ref().set({
      playerName: opponentName,
      showThrow: throwRock
    });

    // Log the new High Price
    console.log(opponentName);
    console.log(throwRock);

    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    playerName = opponentName;
    showThrow = parseInt(throwRock);

    // Change the HTML to reflect the new high price and bidder
    $("#player-name").text(opponentName);
    $("#winning-throw").text(throwRock);
  }

  else {

    // Alert
    alert("Sorry you lose. Try again.");
  }

  // Prevent default behavior
  event.preventDefault();

});

