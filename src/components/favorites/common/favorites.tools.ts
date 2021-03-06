import storage from '../../app/components/storage/storage';
import { convertToRomane, formatDiscount, localizeCurrency } from '../../../common/common.helper';
import { PRODUCT_TYPE_VEHICLE } from '../../../common/common.constants';
import { ProductItemInterface } from '../../../models/product-item.model';

export const renderFavoritesItem = (favoritesItem: ProductItemInterface): string => {
  const favoritesItemInfo = favoritesItem.type.includes(PRODUCT_TYPE_VEHICLE)
    ? `
       <span class="flag flag__${favoritesItem.nation}"></span>
       <span class="tank-type tank-type__${favoritesItem.tank_type.toLowerCase()}"></span>
       <span class="level">${convertToRomane(favoritesItem.tier)}</span>
       <span class="item-name">${favoritesItem.name}</span>
      `
    : `<span class="item-name">${favoritesItem.name}</span>`;
  const { discount, price_discount, discount_show_type, price } = favoritesItem;
  const discountFormatted = formatDiscount(discount, price_discount, discount_show_type, price);

  const priceDiscount = favoritesItem.price_discount
    ? localizeCurrency(Number(favoritesItem.price_discount), favoritesItem.price.code)
    : '';
  const discountClass = favoritesItem.discount_show_type === 'percent' ? 'discount-percent' : 'discount-price';

  const isInCart = storage.checkProductInCartById(favoritesItem.id);

  return `
    <article class="favorite-item" data-id="${favoritesItem.id}">
      ${favoritesItem.discount ? `<div class="discount ${discountClass}">${discountFormatted}</div>` : ''}

      <svg class="favorite__delete-button">
        <use xlink:href="assets/images/sprite.svg#close"></use>
      </svg>
      <div class="favorite-item__info">
        <div class="favorite-item__img-block">
          <img class="favorite-item__img" src="${favoritesItem.images[0]}" alt="${favoritesItem.name}"/>
        </div>
        <div class="favorite-item__text-block">
          <h2 class="favorite-item__text">
            ${favoritesItemInfo}
          </h2>
          <div class="favorite-item__description">${favoritesItem.details}</div>
        </div>
        <div class="favorite-item__price-block">
          <p class="price${favoritesItem.discount ? ' old-price' : ''}">
            ${localizeCurrency(Number(favoritesItem.price.amount), favoritesItem.price.code)}
          </p>
          <p class="price price-discount">
            ${priceDiscount}
          </p>
          <button class="purchase-btn ${isInCart ? 'purchase-btn__active' : ''}">
            purchase
          </button>
        </div>
      </div>
    </article>`;
};
