import React from 'react';
import './Register.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  // redirect to login
  window.location.href = '/login';
};
export default function Register() {
  return (
    <div className='main-container'>
       <form onSubmit={handleSubmit}>
      <div className='image-register'>
        <div className='register-1'>
          <span className='title-register'>Register</span>
          <div className='flex-row-df'>
            <span className='full-name'>Full Name </span>
            <InputText className='p-inputtext' name='full_name' />
        
          </div>
          <div className='flex-row-d'>
            <span className='cin'>
              Cin
            </span>
            <InputText className='p-inputtext' />
          </div>
          <div className='flex-row-d-4'>
            <span className='password'>
              Password
              <br />
            </span>
            <Password className='p-password'  
             feedback={false}
            tabIndex={1} />
          
          </div>
          <div className='flex-row-fa'>
            <span className='confirm-password'>Confirm password</span>
            <Password className='p-password' 
              feedback={false}
              tabIndex={1} />
          </div>
          <div className='flex-row-fc'>
          <input type="checkbox" name="" id="" className='p-checkbox' />  
            <span className='agree-to-terms'>Agree to the Terms of User</span>
          </div>
          <div className=' register-button'>
            <Button className='btn-register'type='submit' >Register</Button>
          </div>
          <span className='have-account-login'>Have an Account?<Link to="/login"><span className='link'>Log in</span></Link></span>
          
        </div>
      </div>
      </form>
    </div>
  );
}
