import { MENU_ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { increaseQuantity, removeItem } from "../utils/cartSlice";
import { decreaseQuantity } from "../utils/cartSlice";
import veg from "../../imgs/veg.png";
import nveg from "../../imgs/nveg.png"




const FoodItem = (props) => {
  const { items } = props;
  console.log(items);
  const { imageId, name, qty, price, defaultPrice, isVeg} = items;
  const dispatch = useDispatch();
  const increaseQty = (item) => {
    //dispatch an action
    dispatch(increaseQuantity(item));
  };
  const decreaseQty = (item) => {
    //dispatch an action
    dispatch(decreaseQuantity(item));
  };
  const remove= (item)=>{
    dispatch(removeItem(item));
  }

  // const decreaseQty=(item)=>{
  //     dispatch(decreaseQuantity(item));
  // };

  return (
    <div className="flex justify-between flex-nowrap">
      <div className="flex"> 
        <img className="p-2 w-40" src={MENU_ITEM_URL + imageId}></img>
        <div className="mt-3 m-2 mr-10">
          <h2 className="text-lg font-bold">{name}</h2>
          {isVeg? <img className="h-5" src={veg} alt=""/>: <img className="h-5" src={nveg} alt=""/>}
        </div>
      </div>

      <div>
        <div className="p-4">
          <button
            className="border bg-slate-300 m-0 p-0.5"
            onClick={() => increaseQty(items)}
          >
            +
          </button>
          <button className=" border m-0 p-0.5">{qty}</button>
          <button
            className="border m-0 bg-slate-300 p-0.5"
            onClick={() => {
              (qty==1) ? remove(items) : decreaseQty(items);
            }}
          >
            -
          </button>
        </div>
        <div className="px-3">
          {" "}
          {" Rs."}
          {(price * qty) / 100 || (defaultPrice * qty) / 100}
        </div>
      </div>
    </div>
  );
};
export default FoodItem;
