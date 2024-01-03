import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            cryoDRGN ❄️🐉
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
              smooth
                to='/#manuscript'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Manuscript
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={{pathname:'https://ez-lab.gitbook.io/cryodrgn'}}
                target='_blank'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                User Guide
              </Link>
            </li>

            <li>
              <Link
                to={{pathname:'https://github.com/zhonge/cryodrgn'}}
                target='_blank'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Software
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' path='https://github.com/zhonge/cryodrgn'>SOFTWARE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
