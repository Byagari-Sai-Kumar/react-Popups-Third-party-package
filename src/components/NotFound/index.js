import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="homeContainer">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="homeImage"
    />
    <h1 className="lostYourWay">Lost Your Way?</h1>
    <p className="para">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
