import './Navbar.scss';
import logo from '../../assets/images/logo-black.svg';
import logoMenu from '../../assets/images/six-signs.svg';
import hamMenu from '../../assets/images/ham-menu.svg';
import closeMenu from '../../assets/images/ham-close.svg';
import line from '../../assets/images/line-nav.svg';
import circle from '../../assets/images/circle-nav.svg';
import arrow from '../../assets/images/arrow-nav.svg';
export const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar--left'>
          <div className='navbar--hamburger'>
            <img className='navbar--hamburger_img' src={hamMenu} alt='hamburger menu' />
            <div className='navbar--hamburger_title'>Menu</div>
          </div>
          <div className='navbar--lines'>
            <img className='navbar--lines_line' src={line} alt='line white nav' />
            <img className='navbar--lines_circle' src={circle} alt='circle white nav' />
            <img className='navbar--lines_arrow' src={arrow} alt='arrow white nav' />
          </div>
        </div>
        <div className='navbar--logo'>
          <img className='navbar--logo_img' src={logo} alt='logo' />
        </div>
        <div className='navbar--right'>
          <div className='navbar--lines'>
            <img className='navbar--lines_arrow' src={arrow} alt='arrow white nav' />
            <img className='navbar--lines_circle' src={circle} alt='circle white nav' />
            <img className='navbar--lines_line' src={line} alt='line white nav' />
            <img className='navbar--lines_circle' src={circle} alt='circle white nav' />
          </div>
        </div>
      </div>
      <div className='navbar--bg'></div>
      <div className='navbar--menu'>
        <div className='navbar--menu_img'>
          <img src={closeMenu} alt='icon close menu' />
          <div className='navbar--menu_img_title'>Close</div>
        </div>
        <div className='navbar--menu_logo'>
          <img src={logoMenu} alt='' />
        </div>
        <div className='navbar--menu_list'>
          <div className='navbar--menu_list_wrapper'>
            <ul className='navbar--menu_list_items'>
              <li className='navbar--menu_list_item'>
                <a className='navbar--menu_list_link' href=''>
                  <p className='navbar--menu_list_text'>HOMEPAGE</p>
                </a>
              </li>
              <li className='navbar--menu_list_item'>
                <a className='navbar--menu_list_link' href=''>
                  <p className='navbar--menu_list_text'>NEWS</p>
                </a>
              </li>
              <li className='navbar--menu_list_item'>
                <a className='navbar--menu_list_link' href=''>
                  <p className='navbar--menu_list_text'>PRODUCTS</p>
                </a>
                <ul className='navbar--menu_sublist'>
                  <li className='navbar--menu_sublist_item'>
                    <a className='navbar--menu_sublist_link' href=''>
                      <p className='navbar--menu_sublist_text'></p>
                    </a>
                  </li>
                  <li className='navbar--menu_sublist_item'>
                    <a className='navbar--menu_sublist_link' href=''>
                      <p className='navbar--menu_sublist_text'></p>
                    </a>
                  </li>
                  <li className='navbar--menu_sublist_item'>
                    <a className='navbar--menu_sublist_link' href=''>
                      <p className='navbar--menu_sublist_text'></p>
                    </a>
                  </li>
                  <li className='navbar--menu_sublist_item'>
                    <a className='navbar--menu_sublist_link' href=''>
                      <p className='navbar--menu_sublist_text'></p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='navbar--menu_list_item'>
                <a className='navbar--menu_list_link' href=''>
                  <p className='navbar--menu_list_text'>HISTORY</p>
                </a>
                <ul className='navbar--menu_sublist'>
                  <li className='navbar--menu_sublist_item'>
                    <a className='navbar--menu_sublist_link' href=''>
                      <p className='navbar--menu_sublist_text'></p>
                    </a>
                  </li>
                  <li className='navbar--menu_sublist_item'>
                    <a className='navbar--menu_sublist_link' href=''>
                      <p className='navbar--menu_sublist_text'></p>
                    </a>
                  </li>
                  <li className='navbar--menu_sublist_item'>
                    <a className='navbar--menu_sublist_link' href=''>
                      <p className='navbar--menu_sublist_text'></p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
