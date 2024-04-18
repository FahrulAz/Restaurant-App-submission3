import CONFIG from '../../globals/configs';

const createRestoDetailTemplate = (resto) => `
  <div class="detail__header">
    <picture>
      <source class="detail__header_img lazyload" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.restaurant.pictureId}" type="image/webp" media="all and (max-width: 576px)" />        
      <source class="detail__header_img lazyload" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.restaurant.pictureId}" type="image/jpeg" media="all and (max-width: 576px)" />
      <source class="detail__header_img lazyload" srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.restaurant.pictureId}" type="image/webp" media="all and (min-width: 577px) and (max-width: 992px)" />    
      <source class="detail__header_img lazyload" srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 577px) and (max-width: 992px)" />
      <source class="detail__header_img lazyload" srcset="${CONFIG.BASE_IMAGE_URL_LARGE + resto.restaurant.pictureId}" type="image/webp" media="all and (min-width: 993px)" />        
      <source class="detail__header_img lazyload" srcset="${CONFIG.BASE_IMAGE_URL_LARGE + resto.restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 993px)" />
      <img class="detail__header_img lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.restaurant.pictureId}" alt="Gambar ${resto.restaurant.name}"/>
    </picture>
    <div class="overlay-img"></div>
    <div class="detail__header__content">
        <h2>Restoran: ${resto.restaurant.name}</h2>
        <span style="font-weight: bold">⭐${resto.restaurant.rating}</span>
    </div>
    <div id="likeButtonContainer"></div>
  </div>

  <div class="detail__card">
    <h3>Overview</h3>
    <p>${resto.restaurant.description}</p>
  </div>

  <div class="detail__card">
    <h3>Information Restaurant</h3>
    <p>Name : ${resto.restaurant.name}</p>
    <p>Address : ${resto.restaurant.address}</p>
    <p>City : ${resto.restaurant.city}</p>
    <p>Rating : ⭐${resto.restaurant.rating}</p>
    <br>
    <h3>Category Menu</h3>
    <ul>
        ${resto.restaurant.categories.map((category) => `
            <li>${category.name}</li>`).join('')}
    </ul>
  </div>
  
  <div class="detail__menuwrapper">
    <div class="detail__card">
        <h3><i class="fa fa-cutlery" aria-hidden="true"></i> Foods Menu</h3>
        <ul>
            ${resto.restaurant.menus.foods.map((food) => `
                <li>${food.name}</li>`).join('')}
        </ul>
    </div>

    <div class="detail__card">
        <h3><i class="fa fa-coffee" aria-hidden="true"></i> Drinks Menu</h3>
        <ul>
            ${resto.restaurant.menus.drinks.map((drink) => `
                <li>${drink.name}</li>`).join('')}
        </ul>
    </div>
  </div>

  <div class="detail__card">
    <h3 style="text-align: center">Customer Review</h3>
    <div class="detail__review">
      ${resto.restaurant.customerReviews.map((review) => `
        <div class="review_card">
            <i class="fa fa-user-circle-o"></i>
            <p>${review.name}</p>
            <p>${review.review}</p>
            <span>${review.date}</span>
        </div>
        `).join('')}
    </div>
  </div>
`;

const createRestoItemTemplate = (resto) => `
    <div tabindex="0" class="product-card" id="${resto.id}">
        <div tabindex="0" class="badge">⭐<span id="rating">${resto.rating}</span></div>
        <div class="card-img">
        <picture>
          <img tabindex="0" class="card-img-content lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" alt="gambar ${resto.name}">
        </picture>
        </div>
        <div class="card-details">
            <div tabindex="0" class="card-city">Kota <span id="city">${resto.city}</span></div>
            <h2 tabindex="0" id="title" class="card-content-title">${resto.name}</h2>
            <p tabindex="0" id="subtitle">${resto.description}
            </p>
         </div>
        <a class="btn btn-card" href="#/detail/${resto.id}">Details</a>
    </div>
`;

const createSkeletonRestoTemplate = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
          <div tabindex="0" class="product-card">
              <div class="card-img">
                  <img tabindex="0" src="./images/placeholder-medium.jpg" alt="skeleton">
              </div>
              <div class="card-details">
                  <div class="card-city">Kota <span id="city"></span></div>
                  <h2 class="card-content-title">Lorem ipsum dolor sit amet</h2>
                  <p> Lorem ipsum dolor sit amet, consectetur adipubahisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut
                  </p>
               </div>
              <a class="btn btn-card"">Details</a>
          </div>
    `;
  }
  return skeleton;
};

const createBtnFavouriteTemplate = () => `
    <button tabindex="0" aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createBtnUnfavouriteTemplate = () => `
    <button tabindex="0" aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLoading = () => `
    <div id="loading" class="center"></div>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createBtnFavouriteTemplate,
  createBtnUnfavouriteTemplate,
  createLoading,
  createSkeletonRestoTemplate,
};
