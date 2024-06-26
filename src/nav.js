import React,{useState}from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css';

const Nav = ({searchbtn}) => {
  const[search,setSearch]=useState()
  const { loginWithRedirect , logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='free'>
        <div className='icon'>
          <FaTruckMoving />
        </div>
        <p>Free Shipping when shopping up to 1000 rupees</p>
      </div>
      <div className='main_header'>
        <div className='container'>
          <div className='logo'>
            <img src='./img/logo.png' alt='logo' />
          </div>
          <div className='search_box'>
            <input type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={()=>searchbtn(search)}>Search</button>
          </div>
          <div className='icon'>
            {isAuthenticated && (
              <div className='account'>
                <div className='user_icon'>
                  <AiOutlineUser />
                  <div>
                    <p>Hello, {user.name}</p>
                  </div>
                </div>
                
              </div>
            )}
            {!isAuthenticated && (
              <button onClick={loginWithRedirect}></button>
            )}
            <div className='second_icon'>
              <Link to="/" className='link' ><AiOutlineHeart className="x-large"/></Link>
              <Link to="/cart" className='link' ><BsBagCheck className="x-large"/></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <Link to='/' className='link'>Home</Link>
              </li>
              <li>
                <Link to='/product' className='link'>Product</Link>
              </li>
              <li>
                <Link to='/about' className='link'>About</Link>
              </li>
              <li>
                <Link to='/contact' className='link'>contact</Link>
              </li>
            </ul>
          </div>
          <div className='auth'>
            {isAuthenticated ? (
              <button onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
              </button>
            ) : (
              <button onClick={loginWithRedirect}>Login</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
