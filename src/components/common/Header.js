import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { dropdownMenu } from '../../data/headerData';
import commonContext from '../../contexts/common/commonContext';
import cartContext from '../../contexts/cart/cartContext';
import AccountForm from '../form/AccountForm';
import SearchBar from './SearchBar';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from '../../contexts/themeContext';

const Header = () => {
  const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
  const { cartItems } = useContext(cartContext);
  const [isSticky, setIsSticky] = useState(false);

  const { theme } = useTheme();

  // handle the sticky-header
  useEffect(() => {
    const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener('scroll', handleIsSticky);

    return () => {
      window.removeEventListener('scroll', handleIsSticky);
    };
  }, [isSticky]);

  const cartQuantity = cartItems.length;

  const headerStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  const linkStyles = {
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  const dropdownMenuStyles = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#444444',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <>
      <header id="header" className={isSticky ? 'sticky' : ''} style={headerStyles}>
        <div className="container">
          <div className="navbar">
            <h2 className="nav_logo">
              <Link to="/" style={linkStyles}>i-tunes</Link>
            </h2>
            <nav className="nav_actions">
              <div className="search_action">
                <span onClick={() => toggleSearch(true)}>
                  <AiOutlineSearch />
                </span>
                <div className="tooltip">Search</div>
              </div>

              <div className="cart_action">
                <Link to="/cart">
                  <AiOutlineShoppingCart />
                  {cartQuantity > 0 && (
                    <span className="badge">{cartQuantity}</span>
                  )}
                </Link>
                <div className="tooltip">Cart</div>
              </div>

              <div className="user_action">
                <span>
                  <AiOutlineUser />
                </span>
                <div className="dropdown_menu" style={dropdownMenuStyles}>
                  <h4>Hello! {formUserInfo && <Link to="*" style={linkStyles}>&nbsp;{formUserInfo}</Link>}</h4>
                  <p>Access account and manage orders</p>
                  {!formUserInfo && (
                    <button
                      type="button"
                      onClick={() => toggleForm(true)}
                      style={dropdownMenuStyles}
                    >
                      Login / Signup
                    </button>
                  )}
                  <div className="separator"></div>
                  <ul>
                    {dropdownMenu.map(item => {
                      const { id, link, path } = item;
                      return (
                        <li key={id}>
                          <Link to={path} style={linkStyles}>{link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <ThemeToggleButton />
            </nav>
          </div>
        </div>
      </header>

      <SearchBar />
      <AccountForm />
    </>
  );
};

export default Header;
