import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { NavLink } from 'react-router-dom';
import "./LoginForm.css";

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
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Log In</button>
        <NavLink
          className='demo-login-btn'
          onClick={loginGuest}
          to='/'
        > Login as Jasmine&apos;s Guest </NavLink>
        <NavLink
          className='demo-login-btn'
          onClick={loginJasmine}
          to='/'
        > Login as Jasmine</NavLink>
      </form>
    </>
  );
}

export default LoginFormModal;
