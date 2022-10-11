import "./index.css";
import skin_care from '../../assets/img/skin_care.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const listProduct = [
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
  {
    img : skin_care,
    decs: 'Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue',
    priceOld: '1.200.000đ',
    priceCurrent: '999.000đ',
    status: 'đã bán',
    country: 'Hàn Quốc'
  },
]

function Container() {
  return (
    <div className="app__container">
      <div className="grid wide">
        <div className="row sm-gutter app__content">
          <div className="col l-2 m-0 c-0">
            <nav className="category">
              <h3 className="category__heading">Danh Mục</h3>

              <ul className="category-list">
                <li className="category-item category-item--active">
                  <a href="#" className="category-item__link">
                    Trang điểm mặt
                  </a>
                </li>
                <li className="category-item">
                  <a href="#" className="category-item__link">
                    Trang điểm môi
                  </a>
                </li>
                <li className="category-item">
                  <a href="#" className="category-item__link">
                    Trang điểm mắt
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col l-10 m-12 c-12">
            <div className="home-filter hide-on-mobile-tablet">
              <span className="home-filter__laber">Sắp xếp theo</span>
              <button className="home-filter__btn btn">Phổ biến</button>
              <button className="home-filter__btn btn btn--primary">
                Mới nhất
              </button>
              <button className="home-filter__btn btn">bán chạy</button>

              <div className="select-input">
                <span className="select-input__laber">Giá</span>
                <i className="select-input__icon fa-solid fa-chevron-down"></i>

                {/* <!-- List option --> */}
                <ul className="select-input__list">
                  <li className="select-input__item">
                    <a href="" className="select-input__link">
                      Giá: Thấp đến cao
                    </a>
                  </li>
                  <li className="select-input__item">
                    <a href="" className="select-input__link">
                      Giá: Cao đến thấp
                    </a>
                  </li>
                </ul>
              </div>

              <div className="home-filter__page">
                <span className="home-filter__page-num">
                  <span className="home-filter__page-current">1</span>/14
                </span>

                <div className="home-filter__page-control">
                  <a
                    href=""
                    className="home-filter__page-btn home-filter__page-btn--disabled"
                  >
                    <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>
                  </a>

                  <a href="" className="home-filter__page-btn">
                    <i className="home-filter__page-icon fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <nav className="mobile-category">
              <ul className="mobile-category__list">
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Dụng cụ & Thiết bị tiện ích
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Thiết bị điện gia dụng
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Đồ dùng phòng bếp
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Dụng cụ trang trí phòng ngủ
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Dụng cụ trang trí phòng khách
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Đồ dùng mẹ và bé
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Thời trang Nam
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Thời trang Nữ
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Bàn ghế và dụng cụ văn phòng
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Điện thoại
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Máy tính bảng
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Màn hình PC
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Phở
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Bún giò
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="" className="mobile-category__link">
                    Cơm hến
                  </a>
                </li>
              </ul>
            </nav>

            <div className="home-product">
              <div className="row sm-gutter">
                {/* <!-- Product item --> */}
                {listProduct.map(item => {
                  return (
                    <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div
                        className="home-product-item__img"
                        style={{backgroundImage: `url(${item.img})`}}
                      ></div>
                      <h4 className="home-product-item__name">
                        {item.decs}
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          {item.priceOld}
                        </span>
                        <span className="home-product-item__price-current">
                        {item.priceCurrent}
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__rating--gold fa-solid fa-star"></i>
                          <i className="home-product-item__rating--gold fa-solid fa-star"></i>
                          <i className="home-product-item__rating--gold fa-solid fa-star"></i>
                          <i className="home-product-item__rating--gold fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">{item.status}</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">
                          {item.country}
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fa-solid fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          10%
                        </span>
                        {/* <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span> */}
                      </div>
                    </a>
                    </div>
                  )
                })}
              </div>
            </div>

            <ul className="pagination home-product__pagination">
              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  <i className="pagination-item__icon fa-solid fa-chevron-left"></i>
                </a>
              </li>

              <li className="pagination-item pagination-item--active">
                <a href="" className="pagination-item__link">
                  1
                </a>
              </li>
              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  2
                </a>
              </li>
              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  3
                </a>
              </li>
              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  4
                </a>
              </li>
              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  5
                </a>
              </li>
              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  ...
                </a>
              </li>
              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  14
                </a>
              </li>

              <li className="pagination-item">
                <a href="" className="pagination-item__link">
                  <i className="pagination-item__icon fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
