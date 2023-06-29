import { useSelector } from "react-redux";
import FoodItem from "./FoodItem"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems= useSelector(store => store.cart.items);
    const dispatch= useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    console.log(cartItems);
    return (
        <div className="mx-40">
        <div className="text-2xl font-bold text-center m-3">Your cart ({cartItems.length} items)</div>
        <button className=" bg-red-200 p-2 m-5"
        onClick={()=>handleClearCart()}>Clear Cart</button>
        
       { cartItems.map((item)=>(
            <FoodItem key= {item.card.info.id} items={item}/>
        ))}
        </div>
    );
}

export default Cart;
