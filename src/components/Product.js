import React, { useState } from 'react';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add, remove } from '../redux/slices/cartSlice';

const Product = ({ post }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  // const [readMoreTitle, setReadMoreTitle] = useState(false);
  const [readMoreDescription, setReadMoreDescription] = useState(false);

  // const title = readMoreTitle ? post.title : `${post.title.substring(0, 15)}....`;
  const description = readMoreDescription ? post.description : `${post.description.substring(0, 30)}....`;

  const addHandler = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeHandler = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="product-container">
      <p className="product-title">
        {post.title}
        {/* <span onClick={() => setReadMoreTitle(!readMoreTitle)}>
          {readMoreTitle ? ` show less` : ` read more`}
        </span> */}
      </p>
      <p className="product-description">
        {description}
        <span onClick={() => setReadMoreDescription(!readMoreDescription)}>
          {readMoreDescription ? ` show less` : ` read more`}
        </span>
      </p>
      <img src={post.image} className="product-image" alt={post.title} width={200} height={150} />
      <div className='priceButtonContainer'>
        <div className="product-price">${post.price}</div>
        {cart.some((p) => p.id === post.id) ? (
          <button className='remove-button' onClick={removeHandler}>
            Remove Button
          </button>
        ) : (
          <button className='add-button' onClick={addHandler}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
