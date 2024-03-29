import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <ul className='nav-ul-container'>
      <li className="logo-container">
        <NavLink to="/" className='logo-nav-container'>
          <img src='https://amazonian-jt.s3.us-west-1.amazonaws.com/amazonian-logo-light.png' alt='amazonian-logo' className='logo-img'/>
        </NavLink>
      </li>
      <li>
        <ProfileButton />
      </li>
    </ul>
  );
}

export default Navigation;
