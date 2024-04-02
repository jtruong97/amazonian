import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
    if(password.length < 8 || password.length > 30){
      return setErrors({
        passwordLength:
          "Password must be at least 8 characters and no more than 30 characters long",
      });
    }
    if(!first_name){
      return setErrors({
        first_name:
          "First name is required"
      })
    }
    if(first_name.length < 1 || first_name.length > 30){
      return setErrors({
        first_nameLength:
          "First name must be at least 1 character and no more than 30 characters long"
      })
    }
    if(!last_name){
      return setErrors({
        last_name:
          "Last name is required"
      })
    }
    if(last_name.length < 1 || last_name.length > 30){
      return setErrors({
        last_nameLength:
          "Last name must be at least 1 character and no more than 30 characters long"
      })
    }
    if(username.length < 3 || username.length > 30){
      return setErrors({
        usernameLength:
          "Username must be at least 3 characters and no more than 30 characters long"
      })
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        password,
        first_name,
        last_name
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className='login-modal-page'>
      <img src ='amazonian-logo-dark.png' className='sign-log-logo'/>
      <div className='sign-in-form-container'>
        <h2>Sign Up</h2>
        {errors.server && <p>{errors.server}</p>}
        <form onSubmit={handleSubmit} className='sign-in-form'>
        <label className='signin-label'>
          First Name*
          <input
            className='signin-input'
            type="text"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>
        {errors.first_name && <p className='form-val-txt'>{errors.first_name}</p>}
        {errors.first_nameLength && <p className='form-val-txt'>{errors.first_nameLength}</p>}
        <label className='signin-label'>
          Last Name*
          <input
            className='signin-input'
            type="text"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        {errors.first_name && <p className='form-val-txt'>{errors.first_name}</p>}
        {errors.last_nameLength && <p className='form-val-txt'>{errors.last_nameLength}</p>}
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
          <label  className='signin-label'>
            Username*
            <input
              className='signin-input'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          {errors.username && <p className='form-val-txt'>{errors.username}</p>}
          {errors.usernameLength && <p className='form-val-txt'>{errors.usernameLength}</p>}
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
          {errors.passwordLength && <p className='form-val-txt'>{errors.passwordLength}</p>}
          <label className='signin-label'>
            Confirm Password*
            <input
              className='signin-input'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          {errors.confirmPassword && <p className='form-val-txt'>{errors.confirmPassword}</p>}
          <button type="submit" className='login-btn'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupFormModal;
