import React from 'react'
import LayOut from '../../LayOut/LayOut'
import CarouselEffect, {Carousel} from '../../Carousel/CarouselEffect';


import Category from  "../.././Category/Category"
import Product from "../../Product/Product.js"





function Landing() {
  return (
    <LayOut>
        <CarouselEffect/>
        <Category/>
        <Product/>
    </LayOut>
  )
}

export default Landing