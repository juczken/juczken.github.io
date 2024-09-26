import React, { FC } from 'react';
import './test.css';

export const TestCart: React.FC = () => {
  return (
    <div className='bound'>
    <div className="product-button__cover">
      <div className="product-button__existing">
        <button
          type="button"
          className="simple-button reset-button product-button__existing-button product-button__existing-button--subtract style--catalog-2-level-product-card-subtract"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="simple-button__icon icon sprite-icons">
            <use href="/_nuxt/f12d74e36700fe7cdcadca605bdceb31.svg#i-product-card-minus"></use>
          </svg>
        </button>
        <div
          className="v-popper product-button__existing-toggle-input v-popper--theme-product-page-progress-tooltip v-popper--theme-dropdown style--highlighted"
          data-js-manual-input-toggler=""
        >
          <span className="product-button__existing-transition-group">
            <div className="base-tooltip product-button__existing-info top-center style--catalog-2-level-product-card-manual-input-count disabled-tooltip can-close-on-click-outside">
              <button
                data-js-tooltip-trigger="719eea8f-3e8f-8c93-81ac-ae1c44701d68"
                type="button"
                className="base-tooltip__trigger reset-button"
              >
                <div className="product-button__tooltip-trigger">
                  <p className="product-button__unit">
                    <span className="product-button__unit-size">1</span>

                    <span className="product-button__unit-type">шт</span>
                  </p>
                  <p className="product-button__price">
                    <span className="product-button__price-digits">349</span>
                    <span className="currency-symbol product-button__price-currency ruble-PT" data-v-89072416="">
                      д
                    </span>
                  </p>
                </div>
              </button>
              {/* <div data-js-tooltip-content="719eea8f-3e8f-8c93-81ac-ae1c44701d68" className="base-tooltip__content">
                <div className="base-tooltip__text">Ввод кол-ва вручную</div>
              </div> */}
            </div>
          </span>
        </div>
        <button
          type="button"
          className="simple-button reset-button product-button__existing-button product-button__existing-button--add style--catalog-2-level-product-card-add"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="simple-button__icon icon sprite-icons">
            <use href="/_nuxt/f12d74e36700fe7cdcadca605bdceb31.svg#i-product-card-plus"></use>
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
};
