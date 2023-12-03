import React from 'react'
import CustomImage from './CustomImage'

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
       <CustomImage imgSrc={recipe.image} pt='65%'/>
       <div className='recipe-card-info'>
            <img className='author-img' src={recipe.authorImage} alt="author" />
            <p className='recipe-title'>{recipe.title}</p>
            <p className='recipe-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore rem enim repudiandae, itaque modi! Modi asperiores fugiat, officiis eum libero pariatur.</p>
            <a className='view-btn' href='#'>View Recipe</a>
       </div>
    </div>
  )
}

export default RecipeCard