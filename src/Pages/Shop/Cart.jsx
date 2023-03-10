import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import { remove } from "../../Redux/Reducers/Reducer";
import { toast } from "react-toastify";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  const checkout = () => {
    cart.map((c) => dispatch(remove(c.id)));
    toast("Checked Out");
  };
  return (
    <>
      <Navbar></Navbar>
      {cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col  items-between p-2">
              {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </div>
            <div>
              <div className="flex flex-col items-start p-5 bg-white  h-100 rounded-xl sticky top-20 border space-y-5">
                <h1 className="font-semibold text-lg text-primary">
                  YOUR CART SUMMARY
                </h1>
                <form>
                  <div className="text-secondary">Delivery Information:</div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    className="input w-full max-w-xs mt-2  input-bordered input-primary "
                  />
                  <input
                    type="text"
                    required
                    placeholder="Address"
                    className="input w-full max-w-xs mt-2  input-bordered input-primary "
                  />
                  <input
                    type="text"
                    required
                    placeholder="Phone Number"
                    className="input w-full max-w-xs mt-2  input-bordered input-primary "
                  />
                  <div className=" mt-5 text-secondary">Delivery Methode:</div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label cursor-pointer">
                      <span className="label-text">Cash on delivery</span>
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-primary"
                        checked
                      />
                    </label>
                  </div>
                </form>
                <p>
                  <span className="text-secondary font-semibold">
                    Total Items
                  </span>
                  : <span className="text-primary">{cart.length}</span>
                </p>
                <p>
                  <span className="text-secondary font-semibold">
                    Total Amount
                  </span>
                  : <span className="text-primary">${totalAmount}</span>
                </p>
                <button
                  onClick={checkout}
                  className="bg-primary hover:bg-secondary rounded-lg text-white transition duration-300 ease-linear mt-5 p-3"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-[90vh] flex flex-col items-center justify-center">
            <h1 className="text-primary font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>
            <Link to="/admin/shop">
              <button className="btn btn-primary rounded-lg text-white transition duration-300 ease-linear mt-5p-3">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
