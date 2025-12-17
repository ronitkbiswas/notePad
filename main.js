"use strict";
const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const showNote = document.getElementById("showNote");

// show if saved previously
let notes = localStorage.getItem("notes");
notes ? (notes = JSON.parse(notes)) : (notes = []);
showNote.innerHTML = "";

for (let i = notes.length - 1; i >= 0; i--) {
  const li = document.createElement("li");
  li.innerHTML = `<br>
  <span style='font-size:19px;padding:10px;background-color:teal;color:white;border-radius:20px;'>
  ${notes[i]}
  </span><br><br>
  <button data-index="${i}" style='color:red;'>x</button><br><hr><br>
  `;
  showNote.appendChild(li);
}
// add
addBtn.addEventListener("click", function () {
  const value = input.value.trim();
  if (value === "") {
    alert("Please write something before saving!");
    return;
  }
  notes.push(value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  showNote.innerHTML = "";
  for (let i = notes.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.innerHTML = `<br>
  <span style='font-size:19px;padding:10px;background-color:teal;color:white;border-radius:20px;'>
  ${notes[i]}
  </span><br><br>
  <button data-index="${i}" style='color:red;'>x</button><br><hr><br>`;
    showNote.appendChild(li);
    alert("Note Saved!");
  }
});
// delete
showNote.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const index = e.target.dataset.index;
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNote.innerHTML = "";
  for (let i = notes.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.innerHTML = `<br>
  <span style='font-size:19px;padding:10px;background-color:teal;color:white;border-radius:20px;'>
  ${notes[i]}
  </span><br><br>
  <button data-index="${i}" style='color:red;'>x</button><br><hr><br>`;
    showNote.appendChild(li);
  }
});
