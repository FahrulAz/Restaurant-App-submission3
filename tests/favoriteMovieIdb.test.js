import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favourite-resto-idb';

describe('Favorite resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
