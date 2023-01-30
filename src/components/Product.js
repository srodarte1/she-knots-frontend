import React from 'react'


 const Product = ({name, price, description, inventory, front_image, back_image, discount}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
    <div className="products-container">
      <span className="scrollable-container">
      <center>
      <img className="scrollableimages" src={front_image} alt={name}/>
      </center>
      <h1>{name}</h1>
      <h2>${price}</h2>
      <h3>{description}</h3>
      <p>Only {inventory} left</p>
      <div>
      { {inventory} >> 0 ? <></> : 
          <form onSubmit={handleSubmit}>
            <button type="submit">Buy now!</button>
          </form>}
      </div>
      
      <div className="image-container">
      
      </div>
      <p>{discount}</p>
      </span>
    </div>
    </>
  )
}
export default Product


