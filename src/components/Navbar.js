import { FaShoppingCart } from 'react-icons/fa';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = ()=> {
  const {cart} = useSelector((state) => state);
  return (
    <div className='navbar' >
        <div className='navContainer'>
            <NavLink to="/">
                <div>
                <img className="logo" src="https://tse4.mm.bing.net/th?id=OIP.SmKLB4lSke7OwmxD5hSMmwHaHa&pid=Api&P=0&h=180" />
                </div>
            </NavLink>
          

           <div className='navDetail'>
            <NavLink to ="/">
            <p>Home</p>
             
            </NavLink>

            <NavLink to ="/cart">
                <div className='icon'>
                <FaShoppingCart/>
                {
                  cart.length >0 && 
                  <span className='itemNumber'>{cart.length}</span>
                }
                </div>
            </NavLink>
           
           
           </div>
        </div>
         
        
   </div>

  );
}

export default Navbar;



