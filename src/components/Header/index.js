import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="navBarContainer">
    <Link to="/" className="linkComponent">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburgerButton"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hamburgerIcon" />
        </button>
      }
      className="popup-content"
      position="right center"
    >
      {close => (
        <div className="closeContainer">
          <button
            type="button"
            data-testid="closeButton"
            className="closeButtonIcon"
            onClick={() => close()}
          >
            <IoMdClose size="30" color="#616e73" />
          </button>
          <ul className="unorderedPopUpContainer">
            <li className="lisItems">
              <Link to="/" onClick={() => close()} className="linkedItems">
                <AiFillHome className="homeIcon" />
                <p className="home">Home</p>
              </Link>
            </li>
            <li className="lisItems">
              <Link to="/about" onClick={() => close()} className="linkedItems">
                <BsInfoCircleFill className="homeIcon" />
                <p className="home">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default withRouter(Header)
