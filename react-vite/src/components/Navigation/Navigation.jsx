import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";


function Navigation() {
  const user = useSelector(state => state.session.user)

  return (
    <div className='nav-bar'>
      <ul className='nav-ul-container'>
        <li className="logo-container">
          <NavLink to="/" className='logo-nav-container'>
            <img src='https://amazonian-jt.s3.us-west-1.amazonaws.com/amazonian-logo-light.png' alt='amazonian-logo' className='logo-img'/>
          </NavLink>
        </li>
        <input type="text" placeholder="Search.." className='search-bar'/>
        {user && (
          <div className='logged-user-nav-bar'>
            {/* <p className='user-greeting'> Hello, {user.first_name}</p> */}
            <NavLink to='' className='prev-order-txt' onClick={() => alert('Feature coming soon')}>Previous Orders</NavLink>
            <NavLink to='/carts' className='cart-text'>
              <BsCart className="cart-favicon"/> Cart
            </NavLink>
          </div>
        )}
        <li>
          <ProfileButton />
        </li>
      </ul>
      <div className='categories-bar'>
          <ul className='category-ul'>
            <li className='cat-li'>Fern</li>
            <li className='cat-li'>Flower</li>
            <li className='cat-li'>Shrub</li>
            <li className='cat-li'>Succulent</li>
            <li className='cat-li'>Tree</li>
            <li className='cat-li'>Vine</li>
          </ul>
      </div>
    </div>
  );
}

export default Navigation;
