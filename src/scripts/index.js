import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './component/navbar';
import './component/footer';
import Main from './view/main';
import swRegister from './utils/sw-register';

const main = new Main({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
  overlay: document.querySelector('.overlay'),
  navlink: document.querySelectorAll('.link-nav'),
});

window.addEventListener('hashchange', () => {
  main.renderPage();
});

window.addEventListener('load', () => {
  main.renderPage();
  swRegister();
});
