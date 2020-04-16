// The keys and notes variables store the piano keys
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "high-c-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
];

const notes = []; //tekes all piano keys with document.getElementByID
keys.forEach((key) => {
  notes.push(document.getElementById(key));
});

// Named functions that change the color of the keys below

// ----one way to write code:
// notes.forEach((note) => {
//   note.addEventListener("mousedown", (e) => {
//     e.target.style.backgroundColor = "red";
//   });
//   note.addEventListener("mouseup", (e) => {
//     e.target.style.backgroundColor = "";
//   });
// });

// -- second way to write code:
const keyPlay = (event) => {
  event.target.style.backgroundColor = "red";
};

const keyReturn = (event) => {
  event.target.style.backgroundColor = "";
};

const run = (note) => {
  note.onmousedown = () => keyPlay(event);
  note.onmouseup = () => keyReturn(event);
};
// Loop that runs the array elements through the function
notes.forEach(run);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Anonymous event handler property and function for the first progress button
nextOne.onclick = () => {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";
};
// Anonymous event handler property and function for the second progress button
nextTwo.onclick = () => {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById("word-five").innerHTML = "DEAR";
  document.getElementById("word-six").innerHTML = "FRI-";
  lastLyric.style.display = "inline-block";
  document.getElementById("letter-onte-three").innerHTML = "G";
  document.getElementById("letter-onte-four").innerHTML = "E";
  document.getElementById("letter-onte-five").innerHTML = "C";
  document.getElementById("letter-onte-six").innerHTML = "B";
};
// Anonymous event handler property and function for the third progress button
nextThree.onclick = () => {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById("word-one") = "HAP-";
  document.getElementById("word-two") = "PY";
  document.getElementById("word-three") = "BIRTH";
  document.getElementById("word-four") = "DAY";
  document.getElementById("word-five") = "TO";
  document.getElementById("word-six") = "YOU!";
};
// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("letter-note-one").innerHTML = "G";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("letter-note-two").innerHTML = "G";
  document.getElementById("word-three").innerHTML = "BIRTH-";
  document.getElementById("letter-note-three").innerHTML = "A";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("letter-note-four").innerHTML = "G";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById("word-six").innerHTML = "YOU!";
  document.getElementById("letter-note-six").innerHTML = "B";
};
