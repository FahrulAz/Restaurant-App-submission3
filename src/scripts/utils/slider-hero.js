class SliderImageHero {
  constructor() {
    this.slideIndex = 0;
    this.slides = document.getElementsByClassName('mySlides');
    this.dots = document.getElementsByClassName('dot');
    this.dotsBtn = document.querySelectorAll('.dot');
  }

  showSlides() {
    Array.from(this.slides).forEach((slide) => {
      slide.style.display = 'none';
    });
    this.slideIndex += 1;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }
    Array.from(this.dots).forEach((dot) => {
      dot.className = dot.className.replace(' active', '');
    });
    if (this.slides[this.slideIndex - 1]) {
      this.slides[this.slideIndex - 1].style.display = 'block';
    }
    if (this.dots[this.slideIndex - 1]) {
      this.dots[this.slideIndex - 1].className += ' active';
    }
  }

  startSlideshow() {
    this.dotsBtn.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.slideIndex = index;
        this.showSlides();
      });
    });

    this.showSlides();
    setInterval(() => this.showSlides(), 4000);
  }
}

export default SliderImageHero;
