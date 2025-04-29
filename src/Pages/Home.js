import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from "../components/Product";
import './Home.css';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error aa gya");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="products-grid">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="no-posts">
          <p>No post Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
