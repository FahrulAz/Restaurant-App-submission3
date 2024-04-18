import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { createRestoDetailTemplate, createLoading } from '../template/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favourite-resto-idb';

const Detail = {
  async render() {
    return `
      <div class="load"></div>
      <div class="container">
        <div id="Restaurant-detail" class="Restaurant-detail"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('.load');
    const container = document.querySelector('.container');
    const detailContainer = document.querySelector('#Restaurant-detail');

    container.style.display = 'none';
    loading.innerHTML = createLoading();

    try {
      const resto = await DataSource.getDetailResto(url.id);
      detailContainer.innerHTML = createRestoDetailTemplate(resto);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestos: FavoriteRestoIdb,
        resto: {
          id: resto.restaurant.id,
          name: resto.restaurant.name,
          description: resto.restaurant.description,
          city: resto.restaurant.city,
          rating: resto.restaurant.rating,
          pictureId: resto.restaurant.pictureId,
        },
      });

      container.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      detailContainer.innerHTML = `${error.message}`;
      container.style.display = 'block';
      loading.style.display = 'none';
    }
  },
};

export default Detail;
