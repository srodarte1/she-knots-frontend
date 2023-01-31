import React, { useState } from 'react'


 const Product = ({id, name, price, description, inventory, front_image, back_image, discount}) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {  
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9292/purchases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          product_id: id
        })
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setError(error);
    }
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
      { {inventory} > 0 ? <></> : 
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


