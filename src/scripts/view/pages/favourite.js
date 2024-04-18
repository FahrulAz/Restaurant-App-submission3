import FavoriteRestoIdb from '../../data/favourite-resto-idb';
import { createRestoItemTemplate, createLoading } from '../template/template-creator';

const Favourite = {
  async render() {
    return `
      <div class="load"></div>
      <div class="container" style="margin-top:120px">
        <h2 class="judul-utama">Daftar Favourite Restoran</h2>
        <h2 class="item_not_found"></h2>
        <div tabindex="0" id="list-restaurants" class="list-restaurants">
        </div>

        </div>
      </div>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('.load');
    const container = document.querySelector('.container');
    const favoriteContainer = document.querySelector('#list-restaurants');
    const itemNotFound = document.querySelector('.item_not_found');

    container.style.display = 'none';
    loading.innerHTML = createLoading();

    try {
      const restos = await FavoriteRestoIdb.getAllRestos();
      if (restos.length === 0) {
        itemNotFound.innerHTML = '<h2>Tidak ada Restaurant Favourite</h2>';
      }
      restos.forEach((resto) => {
        favoriteContainer.innerHTML += createRestoItemTemplate(resto);
      });
      loading.style.display = 'none';
      container.style.display = 'block';
    } catch (error) {
      favoriteContainer.innerHTML = `${error.message}`;
      container.style.display = 'block';
      loading.style.display = 'none';
    }
  },
};

export default Favourite;
