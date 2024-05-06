import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
const Header = () => { 
    return (
        <>
        <Navbar />
        <Banner/>
        <div className="product-card-container"></div>
        <Products/>
        </>
    );
}
export default Header;