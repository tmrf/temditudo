/* CARROSSEL DOS PRODUTOS */

const productCarousels = document.querySelectorAll('.product-card .carousel');

productCarousels.forEach((carousel) => {

  const images = carousel.querySelectorAll('.carousel-images img');

  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let current = 0;

  function showImage(index){

    images.forEach((img) => {
      img.classList.remove('active');
    });

    images[index].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {

    current++;

    if(current >= images.length){
      current = 0;
    }

    showImage(current);

  });

  prevBtn.addEventListener('click', () => {

    current--;

    if(current < 0){
      current = images.length - 1;
    }

    showImage(current);

  });

  /* AUTO PLAY */
  setInterval(() => {

    current++;

    if(current >= images.length){
      current = 0;
    }

    showImage(current);

  }, 3000);

});