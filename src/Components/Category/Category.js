
import React from 'react'
import { CategoryImage} from "./CategoryFullInfos"

import CategoryCard from './CategoryCard'
import classes from './Category.module.css'

function Category() {
  return (
    <section className={classes.category__container}>
      {CategoryImage.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
    </section>
  )
}

export default Category

