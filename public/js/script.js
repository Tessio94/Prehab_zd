"use strict";

// 1) Open tab functionality

// const tabLinks = document.getElementsByClassName("tab-links");
const tabLinks = document.querySelectorAll(".tab-links");
// console.log(tabLinks);
const tabContents = document.querySelectorAll(".tab-contents");
// console.log(tabContents);

function openTab(tabName) {
  tabLinks.forEach((tab) => tab.classList.remove("active-link"));
  tabContents.forEach((content) => content.classList.remove("active-tab"));
  // console.log(tabName.target);

  tabName.target.classList.add("active-link");
  tabContents.forEach((content) => {
    if (content.id === tabName.target.dataset.tab) {
      content.classList.add("active-tab");
      console.log(content);
    }
  });
}

tabLinks.forEach((tab) => tab.addEventListener("click", openTab));

// 2) Menu open funcitonality
const menuIcon = document.querySelector(".fa-bars");
const exitIcon = document.querySelector(".fa-square-xmark");
const list = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => (list.style.right = "0"));

exitIcon.addEventListener("click", () => (list.style.right = "-150px"));

// 3) Scrolling functionality
// done using only css? easy.

// 4) form functionality
// let scriptURL =
//   "https://script.google.com/macros/s/AKfycbzrs64fWF7Dk-rZZxvhIEh4tiGOOAs_lCDKAIHDW93QQ-4gubJdSlFQZ_HAlRQRt1_3/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Upit poslan";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

// 5) title text transition
const multiple = new Typed(".multiple", {
  strings: [
    "Dobrodošli u Prehab!",
    "Započnite svoj put prema ozdravljenju!",
    "Lokacija 1: Splitska 3, Zadar",
    "Lokacija 2: Bukovačka 15, Biograd N/M",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  // fadeOut: true,
  backDelay: 1000,
  loop: true,
});

// 6) form functionality via Node.js
const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest(); // oldschool way, we could use fetch api
  xhr.open("POST", "/"); // two arguments 1) method we're going to use, in this case posting our data to the backend, 2) url we want to post to
  xhr.setRequestHeader("content-type", "application/json"); // best way to send our object (formData) is via json format
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText === "success") {
      alert("Email sent");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something went wrong");
    }
  }; // onload function will trigger once we receive response (responseText - response from server) from our backend

  xhr.send(JSON.stringify(formData));
});
