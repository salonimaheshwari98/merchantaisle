import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { toast } from 'react-toastify';
import { clearCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  function clickHandler() {
    dispatch(clearCart());
    toast.success("Shopping done!");
    navigate("/");
  }

  return (
    <div className="cartPage">
      {cart.length > 0 ? (
        <>
          {/* Cart Items Section */}
          <div className="cartItemsContainer">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="cartSummary">
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items: {cart.length}</span>
            </p>
            <p>Total Amount: ${totalAmount}</p>
            <button onClick={clickHandler}>Check Out</button>
          </div>
        </>
      ) : (
        <div className="emptyCart">
          <h1>Cart Empty</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
