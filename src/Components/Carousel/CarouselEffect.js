// import React from 'react'
// import{Carousel} from'react-responsive-carousel'
// import { img } from './img/data'
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// function CarouselEffect(){
// return (
//     <div>
//         <Carousel

//         autoPlay={true}
//         infiniteLoop={true}
//         showIndicators={false}
//         showThumbs={false}
//         >
// {
//     img.map((imageItemLink)=>{
//         return<img src={imageItemLink}/>
//     })
// }
//         </Carousel>

//     </div>
// )
// }

// export default CarouselEffect

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`Slide ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
