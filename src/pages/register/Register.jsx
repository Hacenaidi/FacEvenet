import React, { useState } from 'react';
import './Register.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!cin.trim()) {
      errors.cin = 'CIN is required';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }


    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here
      // redirect to login
      window.location.href = '/login';
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);

    // Clear the error message when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
    }));
  };

  return (
    <div className='main-container'>
      <form onSubmit={handleSubmit}>
        <div className='image-register'>
          <div className='register-1'>
            <span className='title-register'>Register</span>
            <div className='flex-row-df'>
              <span className='full-name'>Full Name </span>
              <InputText
                className='p-inputtext'
                name='fullName'
                value={fullName}
                onChange={(e) => handleInputChange(e, setFullName)}
              />
              {errors.fullName && <div className='error-message'>{errors.fullName}</div>}
            </div>
            <div className='flex-row-d'>
              <span className='cin'>CIN</span>
              <InputText
                className='p-inputtext'
                name='cin'
                value={cin}
                onChange={(e) => handleInputChange(e, setCin)}
              />
              {errors.cin && <div className='error-message'>{errors.cin}</div>}
            </div>
            <div className='flex-row-d-4'>
              <span className='password'>Password</span>
              <Password
                className='p-password'
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                feedback={false}
                tabIndex={1}
              />
              {errors.password && <div className='error-message'>{errors.password}</div>}
            </div>
            <div className='flex-row-fa'>
              <span className='confirm-password'>Confirm password</span>
              <Password
                className='p-password'
                value={confirmPassword}
                onChange={(e) => handleInputChange(e, setConfirmPassword)}
                feedback={false}
                tabIndex={1}
              />
              {errors.confirmPassword && <div className='error-message'>{errors.confirmPassword}</div>}
            </div>
            <div className='flex-row-fc'>
              <input
                type='checkbox'
                name='agreeTerms'
                id='agreeTerms'
                className='p-checkbox'

            
                required
              /> Agree to the Terms of User
             
            </div>
            <div className='register-button'>
              <Button className='btn-register' type='submit'>
                Register
              </Button>
            </div>
            <span className='have-account-login'>
              Have an Account?
              <Link to='/login'>
                <span className='link'>Log in</span>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
