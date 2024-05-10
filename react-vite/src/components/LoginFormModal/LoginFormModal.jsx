import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { NavLink } from 'react-router-dom';
import "./LoginForm.css";
import google from '../../../public/google.png'

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  const loginGuest = (e) => {
    e.preventDefault()
    return dispatch(thunkLogin({email:'guest@email.com', password:'password'}))
    .then(closeModal)
  }
  const loginJasmine = (e) => {
    e.preventDefault()
    return dispatch(thunkLogin({email:'jasmine@aa.io', password:'password'}))
    .then(closeModal)
  }

  return (
    <div className='login-modal-page'>
      <img src ='https://i.postimg.cc/9f0StV8m/amazonian-logo-light.png' alt='amazonian-logo' className='sign-log-logo'/>
      <div className='sign-in-form-container'>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className='sign-in-form'>
          <label className='signin-label'>
            Email*
            <input
              className='signin-input'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {errors.email && <p className='form-val-txt'>{errors.email}</p>}
          <label className='signin-label'>
            Password*
            <input
              className='signin-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.password && <p className='form-val-txt'>{errors.password}</p>}
          <button type="submit" className='login-btn'>Log In</button>
        </form>
        <div className='demo-logins'>
          <NavLink
            className='demo-login-btn'
            onClick={loginGuest}
            to='/'
          > Login as Jasmine&apos;s Guest </NavLink>
          ||
          <NavLink
            className='demo-login-btn'
            onClick={loginJasmine}
            to='/'
          > Login as Jasmine</NavLink>
        </div>
        <a href={`${window.origin}/api/auth/oauth_login`} className='google-oauth'>
          <button className='google-login-btn'>
            <img src={google} alt='google-icon'className='google-logo'/>Sign in with Google
          </button>
        </a>
      </div>
    </div>
  );
}

export default LoginFormModal;
