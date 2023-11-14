import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      const restDataFromApi =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setOriginalList(restDataFromApi);
      setListOfRestaurant(restDataFromApi);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearchClick = () => {
    const filteredRestaurant = originalList?.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurant(filteredRestaurant);
  };

  const handleFilterClick = () => {
    const filteredList = originalList?.filter((res) => res.info.avgRating > 4);
    setListOfRestaurant(filteredList);
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant?.map(({ info }) => (
          <RestaurantCard key={info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
