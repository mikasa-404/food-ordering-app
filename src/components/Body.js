import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { list } from "postcss";
import { SWIGGY_API_URL } from "../utils/constants";
const Body = () => {
  //state  variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([""]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [noReserr, setnoReserr] = useState("");

  // const { user, setUser } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(SWIGGY_API_URL);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        const datay=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        const resData = (datay )? (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants): (json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setlistOfRestaurants(resData);
        // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }
  const performSearch = (searchText, restaurants) => {
    if (searchText != "") {
      const filtered = filterData(searchText, restaurants);
      setfilteredRestaurants(filtered);
      setnoReserr("")
      if (filtered?.length === 0) {
        setnoReserr("No Restaurants Found!");
      }
    }
    else {
      setnoReserr("");
      setfilteredRestaurants(restaurants);
    }
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!!</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* search header */}
      <div className="filter bg-[url('./imgs/bgrnd.jpg')] text-slate-100 text-center p-5">
        <div className="m-8 mt-0 whitespace-nowrap">
          <div className="heading text-3xl font-Oswald">Order Delivery & Take-Out</div>
          <div className="m-2 font-Roboto ">Find best restaurants near you</div>
        </div>
        <div className="search m-3 text-black font-Lato ">
          <input
            data-testid="search-input"
            type="text"
            className="search-box rounded-md h-8 w-4/5 sm:w-1/5 p-3"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={
              (e) => {
                setSearchText(e.target.value);
                performSearch(e.target.value, listOfRestaurants);
                console.log(searchText);
              }
            }
          />
          <button data-testid="searchbtn"
            className="search-btn m-2 h-8 p-1 px-2 bg-red-700 text-slate-100 hidden sm:inline-block rounded-md"
            onClick={() => {
              performSearch(searchText, listOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="mx-10 my-10 p-5">
      {noReserr && <div className="flex items-center justify-center text-center"> <p className="text-lg text-red-700 font-semibold ">{noReserr}</p></div>}
        <div data-testid="res-list" className="res-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-4 gap-12">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="links"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Body;
