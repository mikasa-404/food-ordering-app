import { MENU_ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { increaseQuantity } from "../utils/cartSlice";
import  {decreaseQuantity} from "../utils/cartSlice";

const FoodItem=(props)=>{
    const {items} =props; 
    console.log(items);
    const {imageId, name, qty, price, defaultPrice}= items;
    const dispatch = useDispatch();
    const increaseQty = (item) => {
        //dispatch an action
        dispatch(increaseQuantity(item));
      };
      const decreaseQty = (item) => {
        //dispatch an action
        dispatch(decreaseQuantity(item));
      };

    // const decreaseQty=(item)=>{
    //     dispatch(decreaseQuantity(item));
    // };

    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center">
            <img
                className="p-2 w-40"
                src={MENU_ITEM_URL + imageId}
              ></img>
            <h2 className="text-lg font-bold">{name}</h2>
           
            </div>
            
            <div> 
                <div className="p-4 ">
                <button className="border bg-slate-300 m-0"
                onClick={() => increaseQty(items)}
                 >+</button>
                <button className=" border m-0">{qty}</button>
                <button className="border m-0 bg-slate-300" onClick={() => decreaseQty(items)}>-</button>
                </div>
                <div> {" Rs."}
                  {price*qty / 100 || defaultPrice*qty / 100}</div>
            
            </div>
            </div>
            
    );
};
export default FoodItem;