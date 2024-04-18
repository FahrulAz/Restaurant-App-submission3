import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../../src/scripts/data/favourite-resto-idb';

const createLikeButtonInitiatorWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestoIdb,
    resto,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatorWithResto };
