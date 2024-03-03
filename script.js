"use strict";

const images = ["/assets/img-1.jpg", "/assets/img-2.jpg", "/assets/img-3.jpg"];
let currentIndex = 0;

function displayCurrentItem() {
  let currentImage = images[currentIndex];
  let container = document.getElementById("container");
  container.innerHTML = `<img src = ${currentImage} alt = cyberpunk/>`;
}

displayCurrentItem();

function displayNextItem() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  let currentImage = images[currentIndex];
  let container = document.getElementById("container");
  container.innerHTML = `<img src = ${currentImage} alt = gta/>`;
}

function displayPrevItem() {
  if (currentIndex === 0) {
    currentIndex = 2;
  } else {
    currentIndex = currentIndex - 1;
  }
  let currentImage = images[currentIndex];
  let container = document.getElementById("container");
  container.innerHTML = `<img src = ${currentImage} alt = dota/>`;
}

document.getElementById("next").addEventListener("click", displayNextItem);
document.getElementById("prev").addEventListener("click", displayPrevItem);
