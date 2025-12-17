"use strict";
const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const showNote = document.getElementById("showNote");

let notes = localStorage.getItem("notes");
notes ? (notes = JSON.parse(notes)) : (notes = []);

showNote.innerHTML = "";
for (let i = 0; i < notes.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = `${notes[i]} <button data-index="${i}">x</button>`;
  showNote.appendChild(li);
}
// add
addBtn.addEventListener("click", function () {
  const value = input.value.trim();
  if (value === "") return;
  notes.push(value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  showNote.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${notes[i]} <button data-index="${i}">x</button>`;
    showNote.appendChild(li);
  }
});
showNote.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const index = e.target.dataset.index;
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNote.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${notes[i]} <button data-index="${i}">x</button>`;
    showNote.appendChild(li);
  }
});
