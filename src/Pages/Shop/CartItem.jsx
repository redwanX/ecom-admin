import React from "react";
import { remove } from "../../Redux/Reducers/Reducer";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
  };

  return (
    <>
      <div className="flex items-center justify-between bg-white border my-2 rounded-xl">
        <div className="flex p-3">
          <img src={item.thumbnail} className="rounded-lg h-[100px] w-[100px]" alt="" />
          <div className="ml-10">
            <h1 className="text-xl text-primary font-semibold">
              {item.title}
            </h1>
            <p>${item.price}</p>
          </div>
        </div>
        <div
          onClick={removeItemFromCart}
          className="bg-accent text-primary border hover:bg-primary hover:text-white rounded-full p-3 mr-3"
        >
         <MdDelete></MdDelete>
        </div>
      </div>
    </>
  );
};

export default CartItem;