'use client'

import Image from "next/image";
import { ReactElement } from "react";
import "./globals.css";


export default function Home() {
  return (
    <header id="header" className="header has-sticky sticky-fade">
		<div className="header-wrapper">
			<div id="masthead" className="header-main nav-dark">
      <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
          {/* <!-- Logo --> */}
          <div id="logo" className="flex-col logo">
            {/* <!-- Header logo --> */}
	<a href="http://localhost:3000/" title="Smarthphone Store" rel="home">
    <img className="logoSmarthphoneIcon"
		alt="Smartphone Store"
		src="/phone-store.jpg"
	/><div className="logoSmarthphone}"/></a>
          </div>
          {/* <!-- Mobile Left Elements --> */}
          <div className="flex-col show-for-medium flex-left">
            <ul className="mobile-nav nav nav-left ">
              <li className="nav-icon has-icon">
  		<a href="#" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay" data-color="" className="is-small" aria-label="Menu" aria-controls="main-menu" aria-expanded="false">
		
		  <i className="icon-menu" ></i>
		</a>
				</li>            
			</ul>
          </div>

          {/* <!-- Left Elements --> */}
          <div className="flex-col hide-for-medium flex-left
            flex-grow">
            <ul className="header-nav header-nav-main nav nav-left  nav-spacing-xlarge nav-uppercase" >
              <li className="header-search-form search-form html relative has-icon">
	<div className="header-search-form-wrapper">
		<div className="searchform-wrapper ux-search-box relative is-normal"><form role="search" method="get" className="searchform" action="https://nhistore.com.vn/">
	<div className="flex-row relative">
					<div className="flex-col flex-grow">
			<label className="screen-reader-text" htmlFor="woocommerce-product-search-field-1">Tìm kiếm:</label>
			<input type="search" id="woocommerce-product-search-field-0" className="search-field mb-0" placeholder="Tìm kiếm sản phẩm..." value="" name="s" />
			<input type="hidden" name="post_type" value="product" />
					</div>
		<div className="flex-col">
			<button type="submit" value="Tìm kiếm" className="ux-search-submit submit-button secondary button icon mb-0" aria-label="Submit">
				<i className="icon-search" ></i>			
			</button>
		</div>
	</div>
	<div className="live-search-results text-left z-top"></div>
</form>
</div>	
</div>
</li>           
</ul>
          </div>
          {/* <!-- Right Elements --> */}
          <div className="flex-col hide-for-medium flex-right">
            <ul className="header-nav header-nav-main nav nav-right  nav-spacing-xlarge nav-uppercase">
              <li id="menu-item-15260" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15260 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/tra-cuu-bao-hanh/" className="nav-top-link"><img className="ux-menu-icon" width="30" height="30" src="https://nhistore.com.vn/wp-content/uploads/2021/10/search-1-150x150.png" alt="" />Tra Cứu Bảo Hành</a></li>
<li id="menu-item-15255" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15255 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/he-thong-cua-hang/" className="nav-top-link"><img className="ux-menu-icon" width="30" height="30" src="https://nhistore.com.vn/wp-content/uploads/2021/10/location-150x150.png" alt="" />Hệ Thống Cửa Hàng</a></li>
<li className="cart-item has-icon">
	<a href="http://localhost:3000/danhmuc/vohang/" className="header-cart-link off-canvas-toggle nav-top-link is-small" data-open="#cart-popup" data-className="off-canvas-cart" title="Giỏ hàng" data-pos="right">
<span className="header-cart-title">
   Giỏ hàng     </span>
    <i className="icon-shopping-bag"
    data-icon-label="0">
  </i>
  </a>
  {/* <!-- Cart Sidebar Popup --> */}
  <div id="cart-popup" className="mfp-hide widget_shopping_cart">
  <div className="cart-popup-inner inner-padding">
      	<div className="cart-popup-title text-center">
          <h4 className="uppercase">Giỏ hàng</h4>
          <div className="is-divider"></div>
      </div>
      <div className="widget_shopping_cart_content">
	<p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm trong giỏ hàng.</p>
      </div>
            <div className="cart-sidebar-content relative"></div>  
		</div>
  </div>
</li>
        </ul>
    	</div>
          {/* <!-- Mobile Right Elements --> */}
          <div className="flex-col show-for-medium flex-right">
            <ul className="mobile-nav nav nav-right ">
              <li className="cart-item has-icon">
      <a href="http://localhost:3000/danhmuc/vohang/" className="header-cart-link off-canvas-toggle nav-top-link is-small" data-open="#cart-popup" data-className="off-canvas-cart" title="Giỏ hàng" data-pos="right">
    <i className="icon-shopping-bag"
    data-icon-label="0">
  </i>
  </a>
</li>
        </ul>
          </div>
      </div>
            <div className="container"><div className="top-divider full-width"></div></div>
      </div><div id="wide-nav" className="header-bottom wide-nav nav-dark">
    <div className="flex-row container">

                        <div className="flex-col hide-for-medium flex-left">
                <ul className="nav header-nav header-bottom-nav nav-left  nav-line-bottom nav-size-medium nav-spacing-xlarge">
                    <li id="menu-item-666" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-666 menu-item-design-default has-dropdown has-icon-left"><a href="https://nhistore.com.vn/danh-muc/iphone/" className="nav-top-link"><img className="ux-menu-icon" width="15" height="29" src="https://nhistore.com.vn/wp-content/uploads/2021/10/iphone-210331112745.png" alt="" />iPhone<i className="icon-angle-down" ></i></a>
<ul className="sub-menu nav-dropdown nav-dropdown-simple dark">
	<li id="menu-item-56857" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-56857 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-15-series/">iPhone 15 Series</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-56861" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-56861"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-15-series/iphone-15-pro-max/">iPhone 15 Pro Max</a></li>
		<li id="menu-item-56860" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-56860"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-15-series/iphone-15-pro/">iPhone 15 Pro</a></li>
		<li id="menu-item-56859" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-56859"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-15-series/iphone-15-plus/">iPhone 15 Plus</a></li>
		<li id="menu-item-56858" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-56858"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-15-series/iphone-15/">iPhone 15</a></li>
	</ul>
</li>
	<li id="menu-item-42017" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-42017 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-14-series/">iPhone 14 Series</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-42018" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-42018"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-14-series/iphone-14/">iPhone 14</a></li>
		<li id="menu-item-42019" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-42019"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-14-series/iphone-14-plus/">iPhone 14 Plus</a></li>
		<li id="menu-item-42020" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-42020"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-14-series/iphone-14-pro/">iPhone 14 Pro</a></li>
		<li id="menu-item-42021" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-42021"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-14-series/iphone-14-pro-max/">iPhone 14 Pro Max</a></li>
	</ul>
</li>	
	<li id="menu-item-15512" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-15512 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-13-series/">iPhone 13 Series</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-15516" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15516"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-13-series/iphone-13-pro-max/">iPhone 13 Pro Max</a></li>
		<li id="menu-item-15515" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15515"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-13-series/iphone-13-pro/">iPhone 13 Pro</a></li>
		<li id="menu-item-15513" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15513"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-13-series/iphone-13/">iPhone 13</a></li>
		<li id="menu-item-15514" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15514"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-13-series/iphone-13-mini/">iPhone 13 Mini</a></li>
	</ul>
</li>
	<li id="menu-item-668" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-668 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-12-series/">iPhone 12 Series</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-15468" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15468"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-12-series/iphone-12-pro-max/">iPhone 12 Pro Max</a></li>
		<li id="menu-item-15467" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15467"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-12-series/iphone-12-pro/">iPhone 12 Pro</a></li>
		<li id="menu-item-15465" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15465"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-12-series/iphone-12/">iPhone 12</a></li>
		<li id="menu-item-15466" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15466"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-12-series/iphone-12-mini/">iPhone 12 Mini</a></li>
	</ul>
</li>
	<li id="menu-item-29613" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-29613 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-11-series/">iPhone 11 Series</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-29616" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-29616"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-11-series/iphone-11-pro-max/">iPhone 11 Pro Max</a></li>
		<li id="menu-item-29615" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-29615"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-11-series/iphone-11-pro/">iPhone 11 Pro</a></li>
		<li id="menu-item-29614" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-29614"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-11-series/iphone-11/">iPhone 11</a></li>
	</ul>
</li>
	<li id="menu-item-671" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-671"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-se-2020/">iPhone SE 2020</a></li>
	<li id="menu-item-15833" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-15833 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-xs-xs-max/">iPhone Xs / Xs Max</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-15835" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15835"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-xs-xs-max/iphone-xs-max/">iPhone Xs Max</a></li>
		<li id="menu-item-15834" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15834"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-xs-xs-max/iphone-xs/">iPhone Xs</a></li>
	</ul>
</li>
	<li id="menu-item-15832" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15832"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-x/">iPhone X</a></li>
	<li id="menu-item-673" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-673"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-xr/">iPhone XR</a></li>
	<li id="menu-item-15837" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-15837 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-8-8-plus/">iPhone 8 | 8 Plus</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-40506" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-40506"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-8-8-plus/iphone-8/">iPhone 8</a></li>
		<li id="menu-item-15838" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-15838"><a href="https://nhistore.com.vn/danh-muc/iphone/iphone-8-8-plus/iphone-8-plus/">iPhone 8 Plus</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-661" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-661 menu-item-design-default has-dropdown has-icon-left"><a href="https://nhistore.com.vn/danh-muc/ipad/" className="nav-top-link"><img className="ux-menu-icon" width="15" height="15" src="https://nhistore.com.vn/wp-content/uploads/2021/10/ipad-210331112830.png" alt="" />iPad<i className="icon-angle-down" ></i></a>
<ul className="sub-menu nav-dropdown nav-dropdown-simple dark">
	<li id="menu-item-665" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-665"><a href="https://nhistore.com.vn/danh-muc/ipad/ipad-pro/">iPad Pro</a></li>
	<li id="menu-item-663" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-663"><a href="https://nhistore.com.vn/danh-muc/ipad/ipad-air/">iPad Air</a></li>
	<li id="menu-item-662" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-662 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/ipad/ipad-10-2/">iPad 10.2</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-16063" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-16063"><a href="https://nhistore.com.vn/danh-muc/ipad/ipad-10-2/ipad-gen-9/">iPad Gen 9</a></li>
	</ul>
</li>
	<li id="menu-item-664" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-664 nav-dropdown-col"><a href="https://nhistore.com.vn/danh-muc/ipad/ipad-mini/">iPad Mini</a>
	<ul className="sub-menu nav-column nav-dropdown-simple dark">
		<li id="menu-item-16065" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-16065"><a href="https://nhistore.com.vn/danh-muc/ipad/ipad-mini/ipad-mini-6/">iPad Mini 6</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-677" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-677 menu-item-design-default has-dropdown has-icon-left"><a href="https://nhistore.com.vn/danh-muc/watch/" className="nav-top-link"><img className="ux-menu-icon" width="15" height="15" src="https://nhistore.com.vn/wp-content/uploads/2021/10/apple-watch-210331112853.png" alt="" />Watch<i className="icon-angle-down" ></i></a>
<ul className="sub-menu nav-dropdown nav-dropdown-simple dark">
	<li id="menu-item-42023" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-42023"><a href="https://nhistore.com.vn/danh-muc/watch/apple-watch-ultra/">Apple Watch Ultra</a></li>
	<li id="menu-item-59802" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-59802"><a href="https://nhistore.com.vn/danh-muc/watch/apple-watch-s9/">Apple Watch S9</a></li>
	<li id="menu-item-42022" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-42022"><a href="https://nhistore.com.vn/danh-muc/watch/apple-watch-s8/">Apple Watch S8</a></li>
	<li id="menu-item-16383" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-16383"><a href="https://nhistore.com.vn/danh-muc/watch/apple-watch-s7/">Apple Watch S7</a></li>
	<li id="menu-item-685" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-685"><a href="https://nhistore.com.vn/danh-muc/watch/apple-watch-s6/">Apple Watch S6</a></li>
	<li id="menu-item-686" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-686"><a href="https://nhistore.com.vn/danh-muc/watch/apple-watch-se/">Apple Watch SE</a></li>
</ul>
</li>
<li id="menu-item-675" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-675 menu-item-design-default has-dropdown has-icon-left"><a href="https://nhistore.com.vn/danh-muc/mac/" className="nav-top-link"><img className="ux-menu-icon" width="30" height="30" src="https://nhistore.com.vn/wp-content/uploads/2021/10/macbook-210331112818.png" alt="" />Mac<i className="icon-angle-down" ></i></a>
<ul className="sub-menu nav-dropdown nav-dropdown-simple dark">
	<li id="menu-item-679" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-679"><a href="https://nhistore.com.vn/danh-muc/mac/macbook-air/">MacBook Air</a></li>
	<li id="menu-item-680" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-680"><a href="https://nhistore.com.vn/danh-muc/mac/macbook-pro/">MacBook Pro</a></li>
	<li id="menu-item-678" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-678"><a href="https://nhistore.com.vn/danh-muc/mac/imac/">iMac</a></li>
</ul>
</li>
<li id="menu-item-1448" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1448 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/danh-muc/am-thanh/" className="nav-top-link"><img className="ux-menu-icon" width="20" height="20" src="https://nhistore.com.vn/wp-content/uploads/2021/10/am-thanh-210331112918.png" alt="" />Âm Thanh</a></li>
<li id="menu-item-676" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-676 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/danh-muc/phu-kien/" className="nav-top-link"><img className="ux-menu-icon" width="15" height="15" src="https://nhistore.com.vn/wp-content/uploads/2021/10/phu-kien-210331112940.png" alt="" />Phụ Kiện</a></li>
<li id="menu-item-1438" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1438 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/mua-tra-gop/" className="nav-top-link"><img className="ux-menu-icon" width="20" height="20" src="https://nhistore.com.vn/wp-content/uploads/2021/10/tra-gop-210331113756.png" alt="" />Trả Góp</a></li>
<li id="menu-item-1439" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1439 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/trade-in-thu-cu-doi-moi/" className="nav-top-link"><img className="ux-menu-icon" width="20" height="20" src="https://nhistore.com.vn/wp-content/uploads/2021/10/thu-cu-210331114130.png" alt="" />Thu Cũ</a></li>
<li id="menu-item-1453" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1453 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/flash-sale-giam-gia/" className="nav-top-link"><img className="ux-menu-icon" width="20" height="20" src="https://nhistore.com.vn/wp-content/uploads/2021/10/sale.png" alt="" />Sale</a></li>
<li id="menu-item-1437" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1437 menu-item-design-default has-icon-left"><a href="https://nhistore.com.vn/tin-tuc/" className="nav-top-link"><img className="ux-menu-icon" width="20" height="20" src="https://nhistore.com.vn/wp-content/uploads/2021/10/tin-tuc-210331113446.png" alt="" />Tin Tức</a></li>
                </ul>
            </div>
                        <div className="flex-col hide-for-medium flex-right flex-grow">
              <ul className="nav header-nav header-bottom-nav nav-right  nav-line-bottom nav-size-medium nav-spacing-xlarge">
                   <li className="account-item has-icon"
>
<a href="http://localhost:3000/dangnhap/"
    className="nav-top-link nav-top-not-logged-in "
    data-open="#login-form-popup"  >
    <span>
    Đăng nhập     / Đăng ký  </span>
</a>
</li>
              </ul>
            </div>
                          <div className="flex-col show-for-medium flex-grow">
                  <ul className="nav header-bottom-nav nav-center mobile-nav  nav-line-bottom nav-size-medium nav-spacing-xlarge">
                      <li className="header-search-form search-form html relative has-icon">
	<div className="header-search-form-wrapper">
		<div className="searchform-wrapper ux-search-box relative is-normal"><form role="search" method="get" className="searchform" action="https://nhistore.com.vn/">
	<div className="flex-row relative">
						<div className="flex-col flex-grow">
            <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-1">Tìm kiếm:</label>
			<input type="search" id="woocommerce-product-search-field-1" className="search-field mb-0" placeholder="Tìm kiếm sản phẩm..." value="" name="s" />
			<input type="hidden" name="post_type" value="product" />
					</div>
		<div className="flex-col">
			<button type="submit" value="Tìm kiếm" className="ux-search-submit submit-button secondary button icon mb-0" aria-label="Submit">
				<i className="icon-search" ></i>			</button>
		</div>
	</div>
	<div className="live-search-results text-left z-top"></div>
</form>
</div>	</div>
</li>                  </ul>
              </div>
    </div>
</div>
<div className="header-bg-container fill"><div className="header-bg-image fill"></div><div className="header-bg-color fill"></div></div>		</div>
	</header>
  );
}
