/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favourites');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant Favourite', '.item_not_found');

  I.amOnPage('/');

  I.seeElement('.btn-card');
  const firstResto = locate('.btn-card').first();
  const firstRestoTitle = await I.grabTextFrom('.card-content-title');
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourites');
  I.seeElement('.product-card');
  const likedRestoTitle = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

// untuk test unlike favourite restaurant
Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.btn-card');
  const firstResto = locate('.btn-card').first();
  const firstRestoTitle = await I.grabTextFrom('.card-content-title');
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourites');
  I.seeElement('.product-card');
  const likedRestoTitle = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.seeElement('.product-card');
  const unlikedCardTitle = await I.grabTextFrom('.btn-card');
  I.click(unlikedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourites');
  I.see('Tidak ada Restaurant Favourite', '.item_not_found');
});
