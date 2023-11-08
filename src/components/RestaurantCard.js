import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="wrap-text">{name}</h3>
      <h4 className="wrap-text">{cuisines.join(", ")}</h4>
      <h4 className="wrap-text">{avgRating} Stars</h4>
      <h4 className="wrap-text">{costForTwo}</h4>
      <h4 className="wrap-text">{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
