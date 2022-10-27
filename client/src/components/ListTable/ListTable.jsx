import { Table } from 'antd';
import React from 'react';
import './ListTable.less';

const ListTable = ({
    columns,
    data,
    pageSize,
    scroll={ x: 1300 }
}) => <Table 
className='list-table' 
columns={columns} 
dataSource={data} 
pagination={{pageSize}} 
scroll={scroll} />;

export default ListTable;