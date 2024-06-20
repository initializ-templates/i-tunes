import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';
import { useTheme } from '../../contexts/themeContext';

const Footer = () => {
  const [subValue, setSubValue] = useState('');
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue('');
    alert('Thank you, you are subscribed to receive our daily newsletter');
  };

  const currYear = new Date().getFullYear();

  const footerStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <footer id="footer" style={footerStyles}>
      <div className="container">
        <div className="wrapper footer_wrapper">
          <div className="foot_about">
            <h2>
              <Link to="#" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>i-tunes</Link>
            </h2>
            <div className="foot_subs">
              <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
              <form onSubmit={handleSubmit}>
                <input
                color='black'
                  type="email"
                  className="input_field"
                  placeholder="Email Address*"
                  required
                  value={subValue}
                  onChange={(e) => setSubValue(e.target.value)}
                />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>

          {footMenu.map(item => {
            const { id, title, menu } = item;
            return (
              <div className="foot_menu" key={id}>
                <h4>{title}</h4>
                <ul>
                  {menu.map(item => {
                    const { id, link, path } = item;
                    return (
                      <li key={id}>
                        <Link to={path} style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="separator"></div>

      <div className="sub_footer">
        <div className="container">
          <div className="sub_footer_wrapper">
            <div className="foot_copyright">
              <p>
                {currYear} | XBeat. All Rights Reserved.
                Built by | <a href="https://www.initializ.ai/" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>Initializ Inc.</a>
              </p>
            </div>
            <div className="foot_social">
              {footSocial.map((item) => {
                const { id, icon, path } = item;
                return (
                  <Link to={path} key={id} style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{icon}</Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
