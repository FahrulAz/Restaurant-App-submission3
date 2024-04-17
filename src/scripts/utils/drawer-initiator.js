class DrawerInitiator {
  static init({
    button, drawer, content, overlay, navlink,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, overlay);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, overlay);
    });

    overlay.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, overlay);
    });

    navlink.forEach((link) => {
      link.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer, overlay);
      });
    });
  }

  static _toggleDrawer(event, drawer, overlay) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    overlay.classList.toggle('show');
  }

  static _closeDrawer(event, drawer, overlay) {
    event.stopPropagation();
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  }
}

export default DrawerInitiator;
