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
            <a href='/products/categories/fern' className='cat-li'>Ferns</a>
            <a href='/products/categories/flower' className='cat-li'>Flowers</a>
            <a href='/products/categories/shrub' className='cat-li'>Shrubs</a>
            <a href='/products/categories/succulent' className='cat-li'>Succulents</a>
            <a href='/products/categories/tree' className='cat-li'>Trees</a>
            <a href='/products/categories/vine' className='cat-li'>Vines</a>
          </ul>
      </div>
    </div>
  );
}

export default Navigation;
