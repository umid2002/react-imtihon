import Container from "../container/container";
import Logo from "../../assets/img/footer-logo.jpg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-menu">

          <div className="footer-logo">
            <img className="footer-logo__img" width="70px" height="70px" src={Logo} alt="jpg" />
            <h2 className="footer-logo__title">Bobur</h2>
          </div>

          <div className="footer-social">
            <h3 className="footer-social__title">FIGHT WITH ME</h3>
            <ul className="footer-social__list">
              <li className="footer-social__item">
                <span className="footer-social__span">Twitter</span>
              </li>
              <li className="footer-social__item">
                <span className="footer-social__span">Instagram</span>
              </li>
              <li className="footer-social__item">
                <span className="footer-social__span">Telegram</span>
              </li>
              <li className="footer-social__item">
                <span className="footer-social__span">Youtube</span>
              </li>
              <li className="footer-social__item">
                <span className="footer-social__span">Figma</span>
              </li>
            </ul>
          </div>

          <div className="footer-buy">
            <h3 className="footer-buy__title">WHAT I HAVE DONE:</h3>
            <ul className="footer-buy__list">
              <li className="footer-buy__item">
                <span className="footer-buy__span">Xalq Qabulxonasi</span>
              </li>
              <li className="footer-buy__item">
                <span className="footer-buy__span">Websitee</span>
              </li>
              <li className="footer-buy__item">
                <span className="footer-buy__span">Website</span>
              </li>
              <li className="footer-buy__item">
                <span className="footer-buy__span">Play Market</span>
              </li>
              <li className="footer-buy__item">
                <span className="footer-buy__span">App Store</span>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <ul className="footer-contact__list">
              <li className="footer-contact__item">
                <span className="footer-contact__span">Contact</span>
              </li>
              <li className="footer-contact__item">
                <span className="footer-contact__span">Blog</span>
              </li>
              <li className="footer-contact__item">
                <span className="footer-social__span">Dribble</span>
              </li>
              <li className="footer-contact__item">
                <span className="footer-contact__span">Behance</span>
              </li>
            </ul>
          </div>
          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
