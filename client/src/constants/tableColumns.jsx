import { Space, Image } from "antd";
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';

export const ProductColumns = (edit, del, getColumnSearchProps) => [
  {
    title: 'Id',
    dataIndex: '_id',
    key: 'id',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a._id.localeCompare(b._id),
    ...getColumnSearchProps('_id'),
    width: '20%',
  },
  {
    title: 'SKU',
    dataIndex: 'SKU',
    key: 'SKU',
    sorter: (a, b) => a.SKU.localeCompare(b.SKU),
    ...getColumnSearchProps('SKU'),
    width: '20%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title.localeCompare(b.title),
    ...getColumnSearchProps('title'),
    width: '40%',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'Image',
    render: (_, record) => (<Image key={`img-${record._id}`} src={record.image} width={40} />),
    width: '10%',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    width: '10%',
    fixed: 'right',
    render: (_, record) => (
      <Space key={record._id} size="middle">
        <EditOutlined
        onClick={() => edit(record._id)} />
        <DeleteOutlined
        onClick={() => del(record._id)} />
      </Space>
    )
  },
];