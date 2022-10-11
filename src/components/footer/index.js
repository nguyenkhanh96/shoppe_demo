import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import app_store from '../../assets/img/app_store.png';
import google_play from '../../assets/img/google_play.png';
import qr_code from '../../assets/img/qr_code.png';

function Footer() {
  return (
    <footer className="footer">
            <div className="grid wide footer__content">
                <div className="row">
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item"> 
                                <a href="" className="footer-item__link">F8-Shop mall</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Giới thiệu</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">    
                                <a href="" className="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Trang điểm mặt</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Trang điểm môi</a>
                            </li>
                            <li className="footer-item">    
                                <a href="" className="footer-item__link">Trang điểm mắt</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <i className="footer-item__icon fa-brands fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <i className="footer-item__icon fa-brands fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <i className="footer-item__icon fa-brands fa-linkedin"></i>
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-8 c-12">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__download">
                            <img src={qr_code} alt="Download QR" className="footer__download-qr"/>
                            <div className="footer__download-app">  
                                <a href="" className="footer__download-app-link"> 
                                    <img src={google_play} alt="Google play" className="footer__download-app-img"/>
                                </a>
                                <a href="" className="footer__download-app-link">
                                    <img src={app_store} alt="App store" className="footer__download-app-img"/>           
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <div className="grid wide">
                    <p className="footer__text">© 2020 Bản quyền thuộc về HNK</p>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
