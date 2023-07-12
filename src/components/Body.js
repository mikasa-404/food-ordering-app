import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  //state  variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");


  // const { user, setUser } = useContext(userContext);

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

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body"> 
      <div className="filter bg-[url('./imgs/bgrnd.jpg')] text-slate-100 text-center p-5">
        {/* <div className="filter flex bg-black justify-center"> */}
        <div className="p-5">
          <div className="heading text-3xl">Order Delivery & Take-Out</div>
          <div className="text-sm m-2">Find best restaurants near you</div>
        </div>
        <div className="search m-5 text-black">
          <input
            data-testid="search-input"
            type="text"
            className="search-box leading-6"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button data-testid="searchbtn" 
            className="search-btn m-2 p-1 bg-red-700 text-slate-100"
            onClick={() => {
              console.log(searchText);
              //we are searching in list of restaurants->which won't be modified
              const filteredRestaurants = filterData(
                searchText,
                listOfRestaurants
              );
              //we update filtered restaurants and display it ->list of restaurants remains unchanged
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>

          {/* <input
            value={user.name}
            onChange={(e) => {
              setUser({
                name: e.target.value,
                email: "newemail@gmail.com",
              });
            }}
          ></input> */}
        </div>
        {/* <div className="filter-btn p-3 m-4  text-slate-100">
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
        </div> */}
      </div>
      <div className="mx-10 my-10 p-5"> 
      <div data-testid="res-list" className="res-container grid grid-cols-4 mx-4 gap-12">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="links"
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
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
