import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import Cart_img from "../../imgs/images.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

  console.log(cartItems);

  return cartItems.length === 0 ? (
    <div className="flex flex-col items-center p-5 bg-slate-100">
      <img className=" h-88 w-96 m-5" src={Cart_img}></img>
      <div className=" text-lg font-bold ">Your Cart is empty</div>
      <p className="text-sm">
        You can go to home page to view more restaurants
      </p>
      <button className="bg-blue-600 text-white p-2 m-7 text-sm font-bold rounded-md">
        <Link to="/"> Click here to go back to Restaurants </Link>
      </button>
    </div>
  ) : (
    <div className="mx-40 flex justify-center">
      <div className="m-10">
        <div className="text-2xl font-bold m-3">
          Your cart ({cartItems.length} items)
        </div>
    
        {cartItems.map((item) => (
          <FoodItem key={item.id} items={item} />
        ))}
      </div>
      <div className="m-10 border-slate-800 border-2">
        <h2 className="text-2xl font-bold m-3">Summary</h2>
        <p>Item total</p>
        <p>Delivery Fee</p>
        <p>GST and Restaurant Charges</p>
        <h1>To pay</h1>
      </div>
    </div>
  );
};

export default Cart;
