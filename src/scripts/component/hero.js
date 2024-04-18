class HeroMain extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="slideshow-container">
        <div class="mySlides fade">
          <picture>
          <source class="mySlide_img lazyload" srcset="./images/hero-image_1-small.webp" type="image/webp" media="all and (max-width: 576px)" />
            <source class="mySlide_img lazyload" srcset="./images/hero-image_1-small.jpg" type="image/jpeg" media="all and (max-width: 576px)" />
            <source class="mySlide_img lazyload" srcset="./images/hero-image_1-medium.webp" type="image/webp" media="all and (min-width: 577px) and (max-width: 992px)" />
            <source class="mySlide_img lazyload" srcset="./images/hero-image_1-medium.jpg" type="image/jpeg" media="all and (min-width: 577px) and (max-width: 992px)" />
            <source class="mySlide_img lazyload" srcset="./images/hero-image_1-large.webp" type="image/webp" media="all and (min-width: 993px)" />
            <source class="mySlide_img lazyload" srcset="./images/hero-image_1-large.jpg" type="image/jpeg" media="all and (min-width: 993px)" />
            <img class="mySlide_img lazyload" data-src="./images/hero-image_1-large.jpg" alt="gambar hero ke 1">
          </picture>
        </div>
        <div class="mySlides fade">
          <picture>
          <source class="mySlide_img lazyload" srcset="./images/hero-image_2-small.webp" type="image/webp" media="all and (max-width: 576px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_2-small.jpg" type="image/jpeg" media="all and (max-width: 576px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_2-medium.webp" type="image/webp" media="all and (min-width: 577px) and (max-width: 992px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_2-medium.jpg" type="image/jpeg" media="all and (min-width: 577px) and (max-width: 992px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_2-large.webp" type="image/webp" media="all and (min-width: 993px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_2-large.jpg" type="image/jpeg" media="all and (min-width: 993px)" />
            <img class="mySlide_img lazyload" data-src="./images/hero-image_2-large.jpg" alt="gambar hero ke 2">
          </picture>
        </div>
        <div class="mySlides fade">
          <picture>
          <source class="mySlide_img lazyload" srcset="./images/hero-image_3-small.webp" type="image/webp" media="all and (max-width: 576px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_3-small.jpg" type="image/jpeg" media="all and (max-width: 576px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_3-medium.webp" type="image/webp" media="all and (min-width: 577px) and (max-width: 992px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_3-medium.jpg" type="image/jpeg" media="all and (min-width: 577px) and (max-width: 992px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_3-large.webp" type="image/webp" media="all and (min-width: 993px)" />
          <source class="mySlide_img lazyload" srcset="./images/hero-image_3-large.jpg" type="image/jpeg" media="all and (min-width: 993px)" />
            <img class="mySlide_img lazyload" data-src="./images/hero-image_3-large.jpg" alt="gambar hero ke 3">
          </picture>
        </div>
      </div>
      <br>
      <div style="text-align:center">
        <span class="dot"></span> 
        <span class="dot"></span> 
        <span class="dot"></span> 
      </div>
      <div>
        <h1 tabindex="0" class="judul-utama" id="judulUtama">aplikasi Pencarian Restoran & Cari terbaik yang ada di Kota Anda</h1>
        <p tabindex="0" class="sub-judul">Sebuah aplikasi yang menyimpan kumpulan tempat restoran dan cafe yang ada di seluruh indonesia untuk memudahkan anda dalam memilih tempat terbaik untuk bekerja atau bahkan berkumpul bersama.</p>
      </div>
    `;
  }
}

customElements.define('hero-main', HeroMain);
