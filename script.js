"use strict";

const images = [
  "./assets/img-1.jpg",
  "./assets/img-2.jpg",
  "./assets/img-3.jpg",
  "./assets/img-4.jpg",
  "./assets/img-5.jpg",
  "./assets/img-6.jpg",
];
let currentIndex = 0;

function displayCurrentItem() {
  let currentImage = images[currentIndex];
  let container = document.getElementById("container");
  container.innerHTML = `<img src = ${currentImage} alt = game/>`;

  let likeCount = 0;
  let dislikeCount = 0;

  const likeBtn = document.getElementById("like-btn");
  const dislikeBtn = document.getElementById("dislike-btn");
  const likeCountSpan = document.getElementById("like-count");
  const dislikeCountSpan = document.getElementById("dislike-count");

  likeBtn.addEventListener("click", () => {
    likeCount++;
    likeCountSpan.innerText = likeCount;
  });

  dislikeBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikeCountSpan.innerText = dislikeCount;
  });
}

displayCurrentItem();

function displayNextItem() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    likeCount = 0;
    dislikeCount = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  let currentImage = images[currentIndex];
  let container = document.getElementById("container");
  container.innerHTML = `<img src = ${currentImage} alt = game/>`;

  let likeCount = 0;
  let dislikeCount = 0;

  const likeBtn = document.getElementById("like-btn");
  const dislikeBtn = document.getElementById("dislike-btn");
  const likeCountSpan = document.getElementById("like-count");
  const dislikeCountSpan = document.getElementById("dislike-count");

  likeBtn.addEventListener("click", () => {
    likeCount++;
    likeCountSpan.innerText = likeCount;
  });

  dislikeBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikeCountSpan.innerText = dislikeCount;
  });
}

function displayPrevItem() {
  if (currentIndex === 0) {
    currentIndex = 5;
  } else {
    currentIndex = currentIndex - 1;
  }
  let currentImage = images[currentIndex];
  let container = document.getElementById("container");
  container.innerHTML = `<img src = ${currentImage} alt = game/>`;

  let likeCount = 0;
  let dislikeCount = 0;

  const likeBtn = document.getElementById("like-btn");
  const dislikeBtn = document.getElementById("dislike-btn");
  const likeCountSpan = document.getElementById("like-count");
  const dislikeCountSpan = document.getElementById("dislike-count");

  likeBtn.addEventListener("click", () => {
    likeCount++;
    likeCountSpan.innerText = likeCount;
  });

  dislikeBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikeCountSpan.innerText = dislikeCount;
  });
}

document.getElementById("next").addEventListener("click", displayNextItem);
document.getElementById("prev").addEventListener("click", displayPrevItem);

const cardImg = [
  "./assets/cardImg-1.jpg",
  "./assets/cardImg-2.jpg",
  "./assets/cardImg-3.jpg",
  "./assets/cardImg-4.webp",
  "./assets/cardImg-5.jpg",
  "./assets/cardImg-6.jpg",
  "./assets/cardImg-7.webp",
  "./assets/cardImg-8.webp",
  "./assets/cardImg-9.jpg",
];

function createGallery() {
  const galleryContainer = document.getElementById("myMain");

  cardImg.forEach((imageUrl) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryItem.appendChild(imgElement);

    galleryContainer.appendChild(galleryItem);
  });
}

createGallery();
