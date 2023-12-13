import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className=" w-6/12 m-auto flex justify-between mb-4">
        <h1 className="text-xl font-bold bg-gray-300 text-white rounded-md px-4">
          Cart
        </h1>
        <button
          className="px-4 py-1 bg-orange-400 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="w-6/12 m-auto border rounded-md">
        {cartItems.length === 0 && (
          <div className="text-center bg-gray-300 text-white rounded-md p-4">
            <h1 className=" text-xl font-bold">Cart is empty!!!.</h1>
            <h2>Please add items to cart.</h2>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
