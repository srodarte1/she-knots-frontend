import React from "react";
import { useEffect } from "react";

const ProductsContainer = () => {

    useEffect(() => {
    fetch("http://localhost:9292/products")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => alert(error))
    },[])

    return(
        <div>

        </div>
    )
}

export default ProductsContainer