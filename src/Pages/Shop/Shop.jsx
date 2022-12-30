import React from 'react'
import useProduct from '../../Hooks/UseProduct';

import Item from './Item';
import Navbar from './Navbar';

const Shop = () => {
    const [products ,setProducts ] = useProduct();
  return (
    <div>
        <Navbar></Navbar>
        <div className=' gap-5 grid lg:grid-cols-4 grid-cols-1'>
        {
            products && products.map(item=><Item key={item._id} products={item}></Item>)
        }
        </div>
    </div>
  )
}

export default Shop