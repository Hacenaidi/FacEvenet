import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import login from page
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Register_2 } from './pages/register/Register_2';
import { Register_3 } from './pages/register/Register_3';
import { Register_5 } from './pages/register/Register_5';
import { Register_4 } from './pages/register/Register_4';
import { Navigate } from "react-router-dom";
import { Home } from './pages/home/Home';
function App(){
  return(
    <Router> 
        <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/registerinformation" element={<Register_2/>}/>
        <Route path="/verification" element={<Register_3/>}/>
        <Route path="/verificationcode" element={<Register_4/>}/>
        <Route path="/confirmverification" element={<Register_5/>}/>
        <Route path="/home" element={<Home/>}/>

        </Routes>
  </Router>
  )

}

export default App
