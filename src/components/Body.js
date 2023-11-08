import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState(resList);

  const handleFilterClick = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map(({ info }) => (
          <RestaurantCard key={info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
