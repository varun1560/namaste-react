import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="m-3 w-[250px] border-none rounded-lg transition-transform transform hover:shadow-lg hover:border hover:border-gray-600">
      <img
        className="h-[200px] w-[250px] rounded"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="p-2">
        <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full font-bold">
          {name}
        </h3>
        <h4 className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
          {cuisines.join(", ")}
        </h4>
        <h4 className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full text-gray-400 text-sm">
          {avgRating} Stars {sla.deliveryTime} Minutes
        </h4>
        <h4 className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full  text-gray-400 text-sm">
          {costForTwo}
        </h4>
      </div>
    </div>
  );
};

//Higher order component
//input - RestaurantCard => output - RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
