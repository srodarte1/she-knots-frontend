import React from 'react'


 const Product = ({name, price, description, inventory, front_image, back_image, discount}) => {
  return (
    <>
    <div className="products-container">
      <span className="scrollable-container">
      <img className="scrollableimages" src={front_image} alt={name}/>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <p>{description}</p>
      <p>{inventory}</p>
      <div className="image-container">
      
      </div>
      <p>{discount}</p>
      </span>
    </div>
    </>
  )
}
export default Product


