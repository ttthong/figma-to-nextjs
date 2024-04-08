import Image from 'next/image';

export default function Home() {
  return (
    <main id="main" className="">
      <div className="row category-page-row">
        <div className="col large-12">
          <div className="shop-container">
            <div className="woocommerce-notices-wrapper"></div>
            <div className="products row row-small large-columns-5 medium-columns-3 small-columns-2">
              <div className="product-small col has-hover product type-product post-46342 status-publish first instock product_cat-ipad product_cat-ipad-10-2 product_cat-ipad-gen-10 has-post-thumbnail shipping-taxable purchasable product-type-variable">
                <div className="col-inner">
                  <div className="badge-container absolute left top z-1"></div>
                  <div className="product-small box ">
                    <div className="box-image">
                      <div className="image-none">
                        <a href="http://localhost:3000/danhmuc/ipad/">
                          <Image
                            src="/ipad-1.jpg"
                            width={470}
                            height={500}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="image-tools is-small top right show-on-hover"></div>
                      <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                      <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                    </div>

                    <div className="box-text box-text-products text-center grid-style-2">
                      <div className="title-wrapper">
                        <p className="name product-title woocommerce-loop-product__title">
                          <a href="http://localhost:3000/danhmuc/ipad/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                            IPad Gen 10 64GB Wifi LL
                          </a>
                        </p>
                        <span className="isures-imformation--var">
                          <span className="imfo--details"></span>
                          <i className="fas fa-info-circle"></i>
                        </span>
                      </div>
                      <div className="price-wrapper">
                        <div className="star-rating">
                          <span style={{ width: 0 }}>Được xếp hạng <strong className="rating">0</strong> 5 sao</span>
                        </div>
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>10.300.000<span className="woocommerce-Price-currencySymbol">VNĐ</span></bdi>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tiếp tục thêm các sản phẩm khác tại đây */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
