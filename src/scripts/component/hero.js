class HeroMain extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="slideshow-container">
        <div class="mySlides fade">
          <picture>
            <source type="image/webp" srcset="./images/heros/hero-image_1.webp"/>
            <img class="lazyload" src="./images/heros/hero-image_1.jpg" alt="gambar hero ke 1">
          </picture>
        </div>
        <div class="mySlides fade">
          <picture>
            <source type="image/webp" srcset="./images/heros/hero-image_2.webp"/>
            <img class="lazyload" src="./images/heros/hero-image_2.jpg" alt="gambar hero ke 2">
          </picture>
        </div>
        <div class="mySlides fade">
          <picture>
            <source type="image/webp" srcset="./images/heros/hero-image_3.webp"/>
            <img class="lazyload" src="./images/heros/hero-image_3.jpg" alt="gambar hero ke 3">
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
