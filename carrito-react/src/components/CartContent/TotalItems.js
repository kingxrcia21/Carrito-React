import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
const TotalItems = () => { 
    const { cart } = useContext(dataContext);
    const itemsquanty = cart.reduce((acc, el)=> acc + el.quanty, 0);
    return (
        <>
            <span className="cart-items-total">{itemsquanty}</span>
        </>
    )
};
export default TotalItems;