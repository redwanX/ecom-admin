import React from "react";
import { useNavigate } from 'react-router-dom';

const Item = ({products}) => {
  console.log(products)
    const {id,title,brand,thumbnail,category,price,stock,description}=products;
    const navigate = useNavigate();
  return (

    <div className="card rounded-2xl card-compact border-0 bg-base-100 w-full  lg:w-5/6 mx-auto relative shadow-xl">
    <figure><img className="w-full max-w-xs h-[300px]" src={thumbnail} alt="Shoes" /></figure>
    <div className="card-body bg-accent mb-10">
      <div className="lg:flex block justify-between w-100">
      <h2 className="card-title text-primary text-xl flex justify-center font-bold">{title}</h2>
      <h2 className="card-title text-primary text-xl flex justify-center font-bold">${price}/Unit</h2>
      </div>
      <div>
        
      <p className="text-md text-secondary font-semibold"><span className="text-primary">Brand: </span>{brand}</p>
      <p className="text-md text-secondary font-semibold"><span className="text-primary">Categoty: </span>{category}</p>
      <p className="text-md text-secondary font-semibold"><span className="text-primary">Stock: </span>{stock}</p>
      
      </div>
      
      <p className="text-secondary text-md text-justify"><span className="text-primary font-semibold">Description: </span>{description}</p>
       </div>
    <div className="justify-end roun absolute bottom-0 w-full">
        <button onClick={()=>navigate(`/`)} className="btn rounded-lg btn-secondary w-full">Add to Cart</button>
      </div>
  </div>

  );
};

export default Item;
