import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "./constants";

const useRestaurantsData = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_API);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    const restDataFromApi =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsData(restDataFromApi);
  };

  return { restaurantsData };
};

export default useRestaurantsData;
