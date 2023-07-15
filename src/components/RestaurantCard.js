import {CDN_URL} from "../utils/constants"
  
const RestaurantCard = (props) => {
    const { resData} =  props ;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.data;
   
  
    return (
      <div className="shadow-lg border hover:bg-slate-200 rounded-lg font-Roboto">
        <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
        <div className="res-card-content p-2">
        <h2 className="font-bold text-xl truncate ... font-serif">{name}</h2>
        <h4 className="text-sm  text-gray-600 truncate ...">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center  text-gray-600 mt-4 text-sm">
          <h4 className=" px-2 p-1 bg-green-700 rounded-md text-white">★ {avgRating}</h4>
          <h4>{deliveryTime} mins</h4>
          <h4>{costForTwo / 100} for two</h4>

        </div>
        
        </div>
      </div>
    )
  };

  export default RestaurantCard;