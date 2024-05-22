let images = document.querySelectorAll('.photo-slider');
let currentIndex = 0;

function showImage(index) {
  images.forEach((element, i) => {
    if (i === index) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

images[currentIndex].classList.add('active');
let sliderInterval = setInterval(changeImage, 2000);

let button = document.querySelector('.dark_mode')

let signin = document.querySelector('.account-extension');
let count = 0;
function dekhyo() {
  if (count % 2 == 0) {
    signin.classList.add('dekhyo');
  }
  else {
    signin.classList.remove('dekhyo');
  }
  count++;
}