class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
            <li class="social-icon__item"><a tabindex="0" class="social-icon__link" href="https://www.facebook.com/">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
            <li class="social-icon__item"><a tabindex="0" class="social-icon__link" href="https://twitter.com/?lang=id">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a></li>
            <li class="social-icon__item"><a tabindex="0" class="social-icon__link" href="https://www.linkedin.com/in/ahmadfarulazis/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a></li>
            <li class="social-icon__item"><a tabindex="0" class="social-icon__link" href="https://www.instagram.com/">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
        </ul>
        <ul id="navigationDrawer" class="menu">
          <li class="menu__item"><a tabindex="0" class="menu__link" href="#/">Home</a></li>
          <li class="menu__item"><a tabindex="0" class="menu__link" href="#/favourites">Favourite</a></li>
          <li class="menu__item"><a tabindex="0" class="menu__link" href="https://www.linkedin.com/in/ahmadfarulazis/">About Us</a></li>
        </ul>
        <p>&copy;2024 Ahmad Farul Azis | Dicoding</p>
    `;
  }
}

customElements.define('footer-el', Footer);
