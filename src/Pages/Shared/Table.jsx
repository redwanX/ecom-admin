import React from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
const Table = ({dataSource,columns,filterValue}) => {
   const gridStyle = { minHeight: `95vh` };

  return (
    <ReactDataGrid
    idProperty="id"
    columns={columns}
    dataSource={dataSource}
    defaultFilterValue={filterValue}
    style={gridStyle}
    pagination={true}
  />
  )
}

export default Table