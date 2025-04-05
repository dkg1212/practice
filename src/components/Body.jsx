import RestaurantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    const [listOfResturants,setListOfResturant]=useState(resList);
    return (
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