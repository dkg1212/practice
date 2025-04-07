import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfResturants,setListOfResturant]=useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            //"https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.63510&lng=92.80300&carousel=true&third_party_vendor=1"
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
        console.log(json)
    
        // Optional Chaining
        setListOfResturant(json?.data?.cards[2]?.data?.data?.cards);
    };

    return listOfResturants.length === 0 ? (
        <Shimmer />
      ) :(
      <div className="body">
        <div className="filter">
            <button 
            className="ftn-btn"
            onClick={()=>{
                const filterList=listOfResturants.filter(
                    (res)=>res.info.avgRating>4
                );
                setListOfResturant(filterList);
            }}
            >
                Top Rated Resturants 
            </button>
        </div>
        <div className="res-container">
          {listOfResturants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};

export default Body;