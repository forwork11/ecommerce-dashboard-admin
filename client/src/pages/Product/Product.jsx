import React from 'react';
import { AppLayout } from '../../sections/layouts';
import {
    Col, 
    Row,
    Button,
    Typography,
  } from 'antd';
import './Product.less';
import { getProducts } from '../../services/productService';
import ProductModal from '../../sections/modals/ProductModal';
import ProductListTable from '../../sections/listTables/ProductListTable';
import { useDispatch } from 'react-redux';
import { modalCreate, modalFields, modalOpen, storeProducts } from '../../actions/product';
import { useCallback } from 'react';
import { useEffect } from 'react';
const { Title } = Typography;

const Product = () => {
  const dispatch = useDispatch();
  const loadProducts = useCallback(() => {
    const get = async () => {
      dispatch(storeProducts((await getProducts())?.data));
    }
    get();
  }, [dispatch]);

  useEffect(() => loadProducts(), [loadProducts]);

  const addProduct = () => {
    dispatch(modalFields({}));
    dispatch(modalCreate());
    dispatch(modalOpen());
  }
  
  return (
      <AppLayout>
        <Row style={{ maxWidth: '1300px' }}>
            <Col flex="auto">
            <Title level={3}>Products</Title>
            </Col>
            <Col flex="0 1 110px">
            <Button type="primary" onClick={addProduct}>Add Product</Button>
            </Col>
        </Row>
        <Row>
          <ProductListTable
          loadProducts={loadProducts} />
        </Row>
        <ProductModal
        loadProducts={loadProducts} />
      </AppLayout>
  )
}

export default Product;