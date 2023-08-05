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

      <div className="">
        <div className="p-4  m-auto">
          
          <button className=" m-0 bg-slate-200 p-1 pl-2 rounded-l-lg text-red-700 font-bold"
            onClick={() => {
              (qty==1) ? remove(items) : decreaseQty(items);
            }}
          >
            -
          </button>
          <button className=" m-0 p-1 bg-slate-200">{qty}</button>
          <button className=" bg-slate-200 m-0 p-1 pr-2 rounded-r-lg text-green-700 font-bold"
            onClick={() => increaseQty(items)}
          >
            +
          </button>
          
        </div>
        <div className="px-3 text-center">
          {" "}
          {" Rs."}
          {(price * qty) / 100 || (defaultPrice * qty) / 100}
        </div>
      </div>
    </div>
  );
};
export default FoodItem;
