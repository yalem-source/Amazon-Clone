import  { useEffect } from 'react'
import { useState } from 'react';

import classes from "./Result.module.css"
import LayOut from '../LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { productUrl } from '../../Api/endPoints'
// import Category from '../Category/Category'
import ProductCard from '.././Product/ProductCard'

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/category/${categoryName}')
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products__container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </LayOut>
  );
}


export default Results



