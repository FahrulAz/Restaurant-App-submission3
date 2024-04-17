import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class Main {
  constructor({
    button, drawer, content, overlay, navlink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._overlay = overlay;
    this._navlink = navlink;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      overlay: this._overlay,
      navlink: this._navlink,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const toMainLink = document.querySelector('.to-main');
    const mainContent = document.querySelector('#main-content');

    toMainLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      toMainLink.blur();
    });
  }
}

export default Main;
