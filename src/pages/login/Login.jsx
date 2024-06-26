import React ,{useState} from 'react';
import './login.css';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'; 
import { Message } from 'primereact/message';

import { login } from '../../services/authservices';
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [serverErrors, setServerErrors] = useState('')
  
  const handleLogin = async () => {
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  //  redirect to registerinformation
    window.location.href = '/registerinformation';

  };

  return (
    <div className='main-container'>
      <div className='x-c' />
      {/* <div className='frame' /> */}
      <div className='frame-1' >
        <span className='titer-login'>Login</span>
        <form onSubmit={handleSubmit}>
          <div className='input' >
          <label htmlFor="cin" >Cin : </label><br />
          <InputText id ="cin"value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Cin' className='p-inputtext'/>       
          </div>
          <div className='input'>
          <label htmlFor="password"  >Password :</label><br />
          <Password   
            placeholder='Password'
            feedback={false}
            tabIndex={1} 
         value={password} onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          {serverErrors != '' ? <Message severity="error" text={serverErrors} /> : null}
          <Button type="submit"   className='btn-login'>
          <span className='login-4'>Login</span>
          </Button>
        </form>
       
        <span className='or'>OR</span><br />
        <div className='text'>
        <span >Don't have an account? <Link to="/register">Register</Link></span>
        </div>
      </div>
    </div>
  );
}
