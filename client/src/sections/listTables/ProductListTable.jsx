import React from 'react';
import {
    Button,
    message,
    Modal,
  } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ListTable from '../../components/ListTable/ListTable';
import { productColumns } from '../../utils/tableColumns';
import { deleteProduct } from '../../services/productService';
import { useDispatch, useSelector } from 'react-redux';
import { modalEdit, modalFields, modalOpen } from '../../actions/product';
const { confirm } = Modal;

const ProductListTable = ({
    loadProducts
}) => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product)

    const editProduct = id => {
      dispatch(modalFields(products.find(x => x._id === id)))
      dispatch(modalEdit());
      dispatch(modalOpen());
    }

    const delProduct = async id => {
        const destroyAll = () => {
          Modal.destroyAll();
        };
        confirm({
          icon: <ExclamationCircleOutlined />,
          content: <Button onClick={destroyAll}>Are you sure you want to delete product?</Button>,
    
          async onOk() {
            console.log('OK');
            const result = await deleteProduct(id);
            if (result.status === 204) {
                message.success("Success!");
                await loadProducts();
            }else{
              message.error(result.data);
            }
          },
    
          onCancel() {
            console.log('Cancel');
          },
        });
    }

    return (
        <ListTable
        columns={productColumns(editProduct, delProduct)}
        data={products}
        pageSize={10}
        />
    )
}

export default ProductListTable;