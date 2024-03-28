import { useDispatch, useSelector } from "react-redux";
import FoodItemCart from "./foodItemCart";
import { clearCart } from "../../utils/cartSlice";


const Cart = () => {

   
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());

    }
    const cartItems = useSelector(store => store.cart.items)
    
    return(
       <div>

        <h1 className="bg-green-600 w-24 m-2 rounded-md">cartItems - {cartItems.length}</h1>
        <button className="bg-red-600 w-20 rounded-md m-2" onClick={() =>handleClearCart()}>clear cart</button>
        {cartItems.map((item) => (
            <FoodItemCart key={item.id} {...item}/>

        ))}
        
       </div>

    )


}


export default Cart;