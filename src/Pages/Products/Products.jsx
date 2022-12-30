import React, { useEffect, useState } from 'react'
import Table from '../Shared/Table';
import AddProduct from './AddProduct';

const Products  = () => {
    const [Products ,setProducts ] = useState([]);
    const [modalOpen ,setModalOpen ] = useState(false);
    useEffect(()=>{
        fetch("https://dummyjson.com/products?select=id,thumbnail,title,brand,category,price,stock")
        .then((response) => response.json())
        .then((data) => setProducts (data.products));
        
    },[])

    const columns = [
        { name: 'id', header: 'id', minWidth: 50, defaultFlex: 2 },
        { name: 'thumbnail', header: 'Image', minWidth: 50, defaultFlex: 2,render: ({ value })=> <img className='h-10 w-10 p-2' src={value}></img>},
        { name: 'title', header: 'Title', minWidth: 50, defaultFlex: 2 },
        { name: 'brand', header: 'Brand', minWidth: 50, defaultFlex: 2 },
        { name: 'category', header: 'Category', minWidth: 50, defaultFlex: 2 },
        { name: 'price', header: 'Price', minWidth: 50, defaultFlex: 2 },
        { name: 'stock', header: 'Stock', minWidth: 50, defaultFlex: 2 },
        { name: 'action', header: 'Action', minWidth: 50, defaultFlex: 2,render: ({ value })=><button className='btn btn-xs btn-primary text-accent'>EDIT</button>},
       
      ];

      const filterValue = [
        { name: 'id', operator: 'gte', type: 'number', value: 0 },
        { name: 'title', operator: 'startsWith', type: 'string', value: '' },
        { name: 'brand', operator: 'startsWith', type: 'string', value: '' },
        { name: 'category', operator: 'startsWith', type: 'string', value: '' },
        { name: 'price', operator: 'gte', type: 'number', value: 0 },
        { name: 'stock', operator: 'gte', type: 'number', value: 0 },

      
    ]
   
  return (
   <div>
    <div className='w-full flex justify-end my-2'>
    <label htmlFor="my-modal-6" onClick={()=>setModalOpen(true)} className='btn btn-primary text-accent'>+ ADD PRODUCTS</label>
    
    </div>
    {Products &&<Table columns={columns} filterValue={filterValue} dataSource={Products }  ></Table>}
    {modalOpen?<AddProduct setModalOpen={setModalOpen}></AddProduct>:""}
   
   
   </div>
);
}

export default Products 