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

var rock = document.getElementById('p2ThrowR').src = "Rock.png"
var paper = document.getElementById('p2ThrowP').src = "Paper.png"
var scissors = document.getElementById('p2ThrowS').src = "Scissors.png"

console.log(rock);
console.log(paper);
console.log(scissors);

// function swapImg() {
//  if document.getElementById('swapImage').style.visibility = 'visible';
// }