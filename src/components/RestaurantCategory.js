import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const onAccordianClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header  */}
      <div className="w-6/12 mx-auto my-4">
        <div
          className="flex justify-between bg-gray-100 p-4 cursor-pointer"
          onClick={onAccordianClick}
        >
          <span className="font-bold text-sm">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian Body  */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
