import { Space, Image } from "antd";
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import moment from 'moment';
import ICONS from "../constants/icons";
import TableSearch from '../components/TableSearch/TableSearch';

export const productColumns = (edit, del) => [
  {
    title: 'Id',
    dataIndex: '_id',
    key: 'id',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a._id.localeCompare(b._id),
    ...TableSearch('_id'),
    width: '20%',
  },
  {
    title: 'SKU',
    dataIndex: 'SKU',
    key: 'SKU',
    sorter: (a, b) => a.SKU.localeCompare(b.SKU),
    ...TableSearch('SKU'),
    width: '20%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title.localeCompare(b.title),
    ...TableSearch('title'),
    width: '30%',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'Image',
    render: (_, record) => (<Image key={`img-${record._id}`} src={record.image} width={50}
    fallback={ICONS.FALLBACK} />),
    width: '10%',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
    width: '20%',
    render: (_, record) => (
      <span>{moment(record.createdAt).format('LLL')}</span>
    )
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    width: 80,
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