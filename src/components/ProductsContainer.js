import React from "react";
import { useState, useEffect } from "react";
import Product from './Product'

const ProductsContainer = () => {

const [products, setProducts] = useState([])



useEffect(() => {
  const fetchData = async () => {
    try {
      const r = await fetch("http://localhost:9292/products")
      const data = await r.json()
      setProducts(data)
    } catch (e) {
      alert(e)
    }
  }
  fetchData()
  }, [])

  const mappedProducts = products.map(product => <Product {...product} key = {product.id} />)

    return(
        <div>
            {mappedProducts}
        </div>
    )
}

export default ProductsContainer