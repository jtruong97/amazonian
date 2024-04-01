import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { GiFern } from "react-icons/gi";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { TbTrees } from "react-icons/tb";
import { GiVineLeaf } from "react-icons/gi";
import { GiAgave } from "react-icons/gi";
import { LuShrub } from "react-icons/lu";
import { BiSearchAlt2 } from "react-icons/bi";


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
        <div className='search-container'>
          <input type="text" placeholder="Search.." className='search-bar' onClick={() => alert('Feature coming soon')}/>
          <button className='search-btn' onClick={() => alert('Feature coming soon')}><BiSearchAlt2 /></button>
        </div>
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
            <a href='/products/categories/fern' className='cat-li'><GiFern className='cat-icons'/>Ferns</a>
            <a href='/products/categories/flower' className='cat-li'><PiFlowerTulipDuotone className='cat-icons'/>Flowers</a>
            <a href='/products/categories/shrub' className='cat-li'><LuShrub className='cat-icons'/>Shrubs</a>
            <a href='/products/categories/succulent' className='cat-li'><GiAgave className='cat-icons'/>Succulents</a>
            <a href='/products/categories/tree' className='cat-li'><TbTrees className='cat-icons'/>Trees</a>
            <a href='/products/categories/vine' className='cat-li'><GiVineLeaf className='cat-icons'/>Vines</a>
          </ul>
      </div>
    </div>
  );
}

export default Navigation;
