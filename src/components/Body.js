import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS_API } from "../utils/constants";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANTS_API);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      const restDataFromApi =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setOriginalList(restDataFromApi);
      setListOfRestaurant(restDataFromApi);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }

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
          <Link key={info.id} to={"/restaurants/" + info.id}>
            <RestaurantCard resData={info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
