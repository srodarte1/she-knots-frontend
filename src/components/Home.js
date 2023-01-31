import Announcement from "./Announcement";
import HomeBanner from "./HomeBanner";
import ProductsContainer from "./ProductsContainer";
import ProductForm from "./ProductForm";
import { useState, useEffect } from "react";

const Home = () => {

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

    return(
        <div>
            <Announcement />
            <HomeBanner />
            <ProductsContainer products={products} />
            <ProductForm products={products} setProducts={setProducts} />
        </div>
    )
}

export default Home