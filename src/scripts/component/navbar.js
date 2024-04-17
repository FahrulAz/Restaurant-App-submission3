class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar_brand">
    <img src="./images/logo.jpg" alt="logo restoran">
    <h1><span style="color: rgb(221, 3, 3);">Rules</span> Resto</h1>
    </div>
    <div class="app-bar_hamburger">
      <button id="hamburgerButton">☰</button>
    </div>
      <nav id="navigationDrawer" class="app-bar_navigationlink">
        <ul>
          <li><a class="link-nav" href="#/">Home</a></li>
          <li><a class="link-nav" href="#/favourites">Favourite</a></li>
          <li><a class="link-nav" href="https://www.linkedin.com/in/ahmadfarulazis/">About Us</a></li>
        </ul>
      </nav>
      <div class="overlay"></div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
