import React from 'react'


 const Product = ({name, price, description, inventory, front_image, back_image, discount}) => {
  return (
    <>
    <div classNmae="products-container">
      <span className="scrollable-container">
      
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <p>{inventory}</p>
      <div className="image-container">
      <img className="scrollableimages" src={front_image} alt={name}/>
      </div>
      <p>{discount}</p>
      </span>
    </div>
    </>
  )
}
export default Product


