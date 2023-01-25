import Announcement from "./Announcement";
import HomeBanner from "./HomeBanner";
import ProductsContainer from "./ProductsContainer";

const Home = () => {
    return(
        <div>
            <Announcement />
            <HomeBanner />
            <ProductsContainer />
        </div>
    )
}

export default Home