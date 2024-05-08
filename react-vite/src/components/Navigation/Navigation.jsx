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
import SearchBar from "../SearchBar/SearchBar";

function Navigation() {
  const user = useSelector(state => state.session.user)

  return (
    <div className='nav-bar'>
      <ul className='nav-ul-container'>
        <li className="logo-container">
          <NavLink to="/" className='logo-nav-container'>
            <img src='https://i.postimg.cc/9f0StV8m/amazonian-logo-light.png' alt='amazonian-logo' className='logo-img'/>
          </NavLink>
        </li>
        {/* <div className='search-container'>
          <input type="text" placeholder="Search.." className='search-bar' onClick={() => alert('Feature coming soon')}/>
          <button className='search-btn' onClick={() => alert('Feature coming soon')}><BiSearchAlt2 /></button>
        </div> */}
        <SearchBar className='search-container'/>
        <div className='div-wo-search'>
          {user && (
            <div className='logged-user-nav-bar'>
              {/* <p className='user-greeting'> Hello, {user.first_name}</p> */}
              {/* <NavLink to='' className='prev-order-txt' onClick={() => alert('Feature coming soon')}>Previous Orders</NavLink> */}
              <NavLink to='/carts' className='cart-text'>
                <BsCart className="cart-favicon"/> Cart
              </NavLink>
            </div>
          )}
          <li>
            <ProfileButton />
          </li>
        </div>
      </ul>
      <div className='categories-bar'>
          <ul className='category-ul'>
            <NavLink to='/products/categories/Fern' className='cat-li'><GiFern className='cat-icons'/>Ferns</NavLink>
            <NavLink to='/products/categories/Flower' className='cat-li'><PiFlowerTulipDuotone className='cat-icons'/>Flowers</NavLink>
            <NavLink to='/products/categories/Shrub' className='cat-li'><LuShrub className='cat-icons'/>Shrubs</NavLink>
            <NavLink to='/products/categories/Succulent' className='cat-li'><GiAgave className='cat-icons'/>Succulents</NavLink>
            <NavLink to='/products/categories/Tree' className='cat-li'><TbTrees className='cat-icons'/>Trees</NavLink>
            <NavLink to='/products/categories/Vine' className='cat-li'><GiVineLeaf className='cat-icons'/>Vines</NavLink>
          </ul>
      </div>
    </div>
  );
}

export default Navigation;
