import React from "react";
import Product from './Product';

const ProductsContainer = ({products}) => {

  const mappedProducts = products.map(product => <Product {...product} key = {product.id} />)

  return(
    <div>
      {mappedProducts}
        
    </div>
  )
}

export default ProductsContainer