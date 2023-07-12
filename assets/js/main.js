"use strict";

// console.log(typeof document.querySelectorAll("input"))
const form = document.querySelector("form")
const namesToIterrate = []
const currentName = document.querySelector("#current-name")

function randomSetup() {
  document.querySelectorAll("input").forEach(input => {
    if (input.checked) {
      namesToIterrate.push(input.value)}
  })
  form.removeEventListener("submit", randomSetup)
  getRandomeName()
}

function previousName() {
  if (currentName.textContent.length > 0) {
    document.querySelector("#last-name").insertAdjacentHTML("afterbegin", `<p>${currentName.textContent}</p>`)
  }
}

function getRandomeName() {
  const index = Math.floor(Math.random() * namesToIterrate.length)
  currentName.textContent = namesToIterrate[index]
  namesToIterrate.splice(index, 1)
}

function displayNameList() {
  if (namesToIterrate.length > 0) {
    document.querySelector("#names-left").textContent = namesToIterrate
    return
  }
  document.querySelector("#names-left").textContent = "Keine Namen übrig"
}

form.addEventListener("submit", randomSetup)
form.addEventListener("click", previousName)
form.addEventListener("submit", getRandomeName)
form.addEventListener("submit", displayNameList)
form.addEventListener("submit", (event => event.preventDefault()))
// console.log(namesToIterrate)