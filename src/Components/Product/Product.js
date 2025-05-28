
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';

function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <section className={classes.product__container}>
      {products.map((singleProduct) => (
        <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true} />
      ))}
    </section>
</>

  )
}

export default Product;
