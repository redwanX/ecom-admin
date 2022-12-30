import React, { useEffect, useState } from 'react'
import Table from '../Shared/Table';

const Order = () => {
    const [order,setOrder] = useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/redwanX/test2/main/order.json")
        .then((response) => response.json())
        .then((data) => setOrder(data));

    },[])

    const columns = [
        { name: 'id', header: 'id', minWidth: 50, defaultFlex: 2 },
        { name: 'title', header: 'Title', minWidth: 50, defaultFlex: 2 },
        { name: 'price', header: 'Price', minWidth: 50, defaultFlex: 2 },
        { name: 'total', header: 'Total', minWidth: 50, defaultFlex: 2 },
        { name: 'quantity', header: 'quantity', minWidth: 50, defaultFlex: 2 },
        { name: 'status', header: 'Status', minWidth: 50, defaultFlex: 2,render: ({ value })=><select className='dropdown-content menu border  rounded-box'>
        <option className='text-primary'value="Pending">Pending</option>
        <option className='text-success' value="Delivered">Delivered</option>
        <option className='text-error' value="Canceled">Canceled</option>
        <option className='text-warning' value="Returned">Returned</option>
      </select>
      },
       
      ];

      const filterValue = [
        { name: 'id', operator: 'gte', type: 'number', value: 0 },
        { name: 'totle', operator: 'startsWith', type: 'string', value: '' },
        { name: 'price', operator: 'gte', type: 'number', value: 0 },
        { name: 'total', operator: 'gte', type: 'number', value: 0 },
        { name: 'quantity', operator: 'gte', type: 'number', value: 0 },

      
      
    ]
   
  return (
   <div>
    {order&&<Table columns={columns} filterValue={filterValue} dataSource={order}></Table>}
   </div>
);
}

export default Order