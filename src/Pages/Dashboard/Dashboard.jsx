import React from 'react'
import CategoryChart from './CategotyChart/CategoryChart';
import Counts from './Counts/Counts';
import GeoChart from './GeoChat/GeoChart';
import OrderChart from './OrderChart/OrderChart';
import SalesChart from './SalesChart/SalesChart';

const Dashboard = () => {

  return (
    <div>
      <Counts></Counts>
      <div className='flex justify-between items-center flex-col lg:flex-row'>
        <div className='w-full lg:w-3/5 border bg-white rounded-2xl shadow-lg p-2 lg:m-2 my-2'>
        <div className='w-full text-center text-secondary'>Sales Report</div>
        <hr />
        <SalesChart></SalesChart>
        </div>
        <div className='w-full lg:w-2/5 border bg-white rounded-2xl shadow-lg p-2 lg:m-2 my-2'>
        <div className='w-full text-center text-secondary'>Category Sales</div>
        <hr />
        <CategoryChart></CategoryChart>
        </div>
      </div>

      <div className='flex justify-between items-center flex-col lg:flex-row'>
      <div className='w-full lg:w-1/3 border bg-white rounded-2xl shadow-lg p-2 lg:m-2 my-2'>
        <div className='w-full text-center text-secondary'>Order Overview</div>
        <hr />
        <OrderChart></OrderChart>
        </div>
        <div className='w-full lg:w-2/3 border bg-white rounded-2xl shadow-lg p-2 lg:m-2 my-2'>
        <div className='w-full text-center text-secondary'>Purchased by Country</div>
        <hr />
        <GeoChart></GeoChart>
        </div>
      
      </div>
    </div>
  )
}

export default Dashboard