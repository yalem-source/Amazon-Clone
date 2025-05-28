import React from 'react'
import classes from './Category.module.css'
// import { categoryFullInfos } from "./CategoryFullInfos"
import { Link } from 'react-router-dom';



function CategoryCard ({data})  {
  // console.log(data) *16
  return (
    <div className={ classes.category}>
<Link to ={`/category/${data.name}`}>
    <span>
        <h2>{data.title}</h2>
    </span>
    <img src={data.imgLinks} alt={data.category}/>
    <p> shop now</p>
    </Link>
    </div>
  )
}

export default CategoryCard;