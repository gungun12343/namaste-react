import { useDispatch, useSelector } from "react-redux"
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

export default Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>

            <button 
                onClick={handleClearCart}
                className="bg-red-500 px-4 py-2 rounded-md font-bold mt-4 mb-4">
                Clear Cart
            </button>

            {cartItems.length === 0 ? <h1>Cart is empty. Add items to the cart.</h1> : ""}

            <div className="w-1/2 m-auto">
                <ItemList items={cartItems} label="REMOVE" />
            </div>
        </div>
    )
}