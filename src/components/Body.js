import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  //state  variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("UseEffect CALLED");
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6083697&lng=77.293112&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  console.log(listOfRestaurants);

  const isOnline= useOnline();
  if(!isOnline){
    return <h1>Offline, please check your internet connection!!!</h1>
  }

  return (listOfRestaurants.length === 0) ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="filter flex bg-[url('./imgs/bgrnd.jpg')]  h-96  text-slate-100"> */}

      <div className="filter flex bg-[url('./imgs/bgrnd.jpg')]  h-96  text-slate-100 justify-center">
        <div className="search p-3 ">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value);}}
          />
          <button
            className="search-btn m-2 p-2 bg-slate-600 rounded-lg"
            onClick={() => {
              console.log(searchText);
              //we are searching in list of restaurants->which won't be modified
              const filteredRestaurants= filterData(searchText, listOfRestaurants);
              //we update filtered restaurants and display it ->list of restaurants remains unchanged
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn p-3 m-4">
        <button
          className=" hover:bg-slate-700 border"
          onClick={() => {
            //filter logic here->to modify our list of rest to only filtered restaurants
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setfilteredRestaurants(filteredList);
          }}
        >
          Filter by Rating
        </button>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap mx-20 justify-center my-5 ">
        {filteredRestaurants.map((restaurant) => (
          <Link className="links"
            key={restaurant.data.id} 
            to={"/restaurants/" + restaurant.data.id}>
              <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
