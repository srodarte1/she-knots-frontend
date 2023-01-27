import Announcement from "./Announcement";
import HomeBanner from "./HomeBanner";
import ProductsContainer from "./ProductsContainer";
import ProductForm from "./ProductForm";

const Home = () => {
    return(
        <div>
            <Announcement />
            <HomeBanner />
            <ProductsContainer />
            <ProductForm />
        </div>
    )
}

export default Home