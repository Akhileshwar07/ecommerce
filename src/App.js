import React, { useState } from 'react';
import Nav from './nav';
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';

const App = () => {
  //add to cart
  const [cart,setCart]=useState([])
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Productdetail);

  const searchbtn = (searchTerm) => {
    const processedSearchTerm = searchTerm.replace(/\s+/g, '').toLowerCase();
    const change = Productdetail.filter((x) => {
      const processedCategory = x.Cat.replace(/\s+/g, '').toLowerCase();
      return processedCategory.includes(processedSearchTerm);
    });
    setProduct(change);
  };

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };
  //add to cart 
  
  const addtocart=(product)=>
  {
    const exsit = cart.find((x)=>{
      return x.id===product.id
    })
    if(exsit)
    {
      alert("this product is already added to cart!")
    }
    else
    {
      setCart([...cart, {...product, qty: 1}])
      alert("product is added to cart")
    }
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
