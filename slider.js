document.addEventListener('DOMContentLoaded', () => {
const images = document.querySelectorAll('#slider img');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // loop forward
  showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // loop backward
  showImage(currentIndex);
});

  });
  