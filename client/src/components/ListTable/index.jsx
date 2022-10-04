import { Table } from 'antd';
import React from 'react';
import './ListTable.less';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const ListTable = ({
    columns,
    data,
    pageSize
}) => <Table 
className='list-table' 
columns={columns} 
dataSource={data} 
pagination={{pageSize}} 
onChange={onChange}
scroll={{ x: 1300 }} />;

export default ListTable;