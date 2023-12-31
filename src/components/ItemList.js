import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const addItemsToCart = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-3 m-2 border-gery-200 border-b-2 flex justify-between align-middle"
        >
          <div className="w-4/5 text-left" key={item?.card?.info?.id}>
            <div className="py-2">
              <span className="">{item?.card?.info?.name}</span>
              <br />
              <span className=" text-gray-600 text-sm">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {item?.card?.info?.description}
            </p>
          </div>

          <div>
            <div className="absolute">
              <button
                className="w-20 p-2 bg-orange-400 text-white mx-5 rounded-lg"
                onClick={() => addItemsToCart(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-[120px] h-[100px] object-cover rounded-lg"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
