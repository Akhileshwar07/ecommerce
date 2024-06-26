import React from 'react'
import {Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs';
import {FiTruck} from 'react-icons/fi';
import {FaRupeeSign} from 'react-icons/fa';
import {AiOutlinePercentage} from 'react-icons/ai';
import {useAuth0} from '@auth0/auth0-react';
import {BiHeadphone} from 'react-icons/bi';
import {AiOutlineShoppingCart,AiOutlineCloseCircle} from 'react-icons/ai';
import {BsEye} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css'
const Home = ({detail,view,close,setClose,addtocart}) => {
    const {loginWithRedirect,isAuthenticated}=useAuth0();
  return (
    <>
     {
      close ?
      <div className='product_detail'>
      <div className='container'>
        <button onClick={()=>setClose(false)}className='closebtn'><AiOutlineCloseCircle/></button>
        {
          detail.map((curElm)=>
          {
              return(
                
                <div className='productbox'>
                  <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className='detail'>
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>A Screen Everyone Will Love,Whether Your Family is Streaming Or Video Chatting With Friends Tablet A8...</p>
                    <h3>{curElm.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              )
          })
        }
        <div className='productbox'></div>
      </div>
    </div>:null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Note Book Collection 2023</h2>
                <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slider-img.png' alt='sliderimg'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/Mobile phone.png' alt='mobile'></img>
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/smart watch.png' alt='watch'></img>
                </div>
                <div className='detail'>
                    <p>18 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/headphone.png' alt='headphone'></img>
                </div>
                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/cpu.png' alt='cpu'></img>
                </div>
                <div className='detail'>
                    <p>63 products</p>
                </div>
            </div>

        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck/>
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above ₹100 </p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <FaRupeeSign/>
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Gaurenty</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <AiOutlinePercentage/>
                </div>
                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BiHeadphone/>
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>
    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm)=>
                {
                    return( 
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                {
                                isAuthenticated ?
                                <li onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                : 
                                <li onClick={()=>loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                }
                                    
                                    <li onClick={()=> view (curElm)}><BsEye/></li>
                                    <li><AiOutlineHeart/></li>
                                </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>₹{curElm.Price}</h4>
                            </div>
                        </div>  
                    )
                })
            }
           
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 9th Gen - 2021</h3>
            <p><FaRupeeSign/>98,000</p>
            <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
        </div>
        <div className='img_box'>
            <img src='./img/slider-img.png' alt='sliderimg'></img>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home 