import React from 'react'


 const Product = ({name, price, description, inventory, front_image, back_image, discount}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <p>{inventory}</p>
      <img className="scrollableimages" src={front_image} alt={name}/>
      <p>{discount}</p>
    </div>
  )
}
export default Product


