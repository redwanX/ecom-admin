import React, { useEffect, useState } from 'react'
import Table from '../Shared/Table';

const Customer = () => {
    const [customer,setCustomer] = useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/redwanX/test2/main/customer.json")
        .then((response) => response.json())
        .then((data) => setCustomer(data));

    },[])

    const columns = [
        { name: '_id', header: 'id', minWidth: 50, defaultFlex: 2 },
        { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
        { name: 'email', header: 'Email', minWidth: 50, defaultFlex: 2 },
        { name: 'phone', header: 'Phone', minWidth: 50, defaultFlex: 2 },
       
      ];

      const filterValue = [
        { name: '_id', operator: 'gte', type: 'number', value: 0 },
        { name: 'name', operator: 'startsWith', type: 'string', value: '' },
        { name: 'email', operator: 'startsWith', type: 'string', value: '' },
        { name: 'phone', operator: 'startsWith', type: 'string', value: '' },
      
      
    ]
   
  return (
   <div>
    {customer&&<Table columns={columns} filterValue={filterValue} dataSource={customer}  ></Table>}
   </div>
);
}

export default Customer