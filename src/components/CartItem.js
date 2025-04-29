import React, { useState } from 'react';
import './CartItem.css';
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { remove } from '../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  // const [readMoreTitle, setReadMoreTitle] = useState(false);
  const [readMoreDescription, setReadMoreDescription] = useState(false);

  // const title = readMoreTitle ? item.title : `${item.title.substring(0, 10)}....`;
  const description = readMoreDescription ? item.description : `${item.description.substring(0, 20)}....`;

  return (
    <div className='cartContainer'>
      <div>
        <img src={item.image} width={200} alt={item.title} />
      </div>
      <div>
        <div className='cartDetail'>
          <h2>
            {item.title}
            {/* <span onClick={() => setReadMoreTitle(!readMoreTitle)}>
              {readMoreTitle ? ` show less` : ` read more`}
            </span> */}
          </h2>
          <p>
            {description}
            <span onClick={() => setReadMoreDescription(!readMoreDescription)}>
              {readMoreDescription ? ` show less` : ` read more`}
            </span>
          </p>
          <div>
            <p>{item.price}</p>
            <div onClick={removeHandler}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
