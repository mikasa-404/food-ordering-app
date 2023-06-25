import {CDN_URL} from "../utils/constants"
  
const RestaurantCard = (props) => {
    const { resData} =  props ;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.data;
  
    return (
      <div className="w-[270px] h-[400px] m-3 shadow-lg border hover:bg-slate-100">
        <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
        <div className="res-card-content p-5">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100} for two</h4>
        <h4>{deliveryTime} minutes</h4>
        </div>
      </div>
    )
  };

  export default RestaurantCard;