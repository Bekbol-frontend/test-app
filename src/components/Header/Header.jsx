import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import { FaShoppingCart, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { handleVisible } from "../../store/cart";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to={`/`} className="logo-link">
              <img src={Logo} alt="Logo" className="logo-img" />
              <div className="logo-text">
                <h3>REACT SNEAKERS</h3>
                <p>Магазин лучших кроссовок</p>
              </div>
            </Link>
          </div>
          <div className="header-right">
            <div
              className="cart header-right__item"
              onClick={() => dispatch(handleVisible())}
            >
              <span className="header-icon">
                <FaShoppingCart />
              </span>
              <span>120 руб</span>
            </div>
            <Link
              to="/page-favorite"
              className="favorite-link header-right__item"
            >
              <FaRegHeart />
            </Link>
            <Link to="/page-user" className="user-link header-right__item">
              <FaRegUserCircle />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
