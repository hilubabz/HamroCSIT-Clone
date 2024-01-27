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