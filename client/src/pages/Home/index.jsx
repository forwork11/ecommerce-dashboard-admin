import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import LeftSider from '../../components/LeftSider';
import ListTable from '../../components/ListTable';
import { ProductColumns } from '../../constants/tableColumns';
import { useDispatch } from 'react-redux';
import './Home.less';
import PopupModal from '../../components/PopupModal';
import { ExclamationCircleOutlined, UploadOutlined, LogoutOutlined } from '@ant-design/icons';
import {
  Col, 
  Row,
  Layout,
  Form,
  Input,
  Button,
  Typography,
  Modal,
  message
} from 'antd';
import { deleteProduct, updateProduct, getProducts, addProduct } from '../../services/productService';
import { useCallback } from 'react';
import { logout } from '../../utils/utils';
import { closeModal, openModal } from '../../actions/Setting';
import TableSearch from '../../components/TableSearch';
import ROUTES from '../../constants/routes';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { confirm } = Modal;

const Home = () => {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const getAllProducts = useCallback(async () => {
    const result = await getProducts()
    if (result.status === 200) {
      setAllProducts(result.data);
    }else{
      message.error(result.data);
    }
  }, []);
  useEffect(() => {
    const func = async () => await getAllProducts();
    func();
  }, [getAllProducts]);
  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);

  const addProd = () => {
    setIsEdit(false);
    form.setFieldsValue(setProductValue(null));
    dispatch(openModal());
  }

  const editProduct = id => {
    setIsEdit(true);
    form.setFieldsValue(setProductValue(allProducts.find(x => x._id === id)));
    dispatch(openModal());
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
          await getAllProducts();
          message.success("Success!");
        }else{
          message.error(result.data);
        }
      },

      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const setProductValue = (editData) => ({
    id: editData?._id,
    SKU: editData?.SKU,
    title: editData?.title,
    image: editData?.image,
  });

  const onFinish = async (values) => {
    if (isEdit) {
      const result = await updateProduct(values.id, values);
      if (result.status === 204) {
        form.setFieldsValue(setProductValue(null));
        message.success("Success!");
        dispatch(closeModal());
        await getAllProducts();
      }else{
        message.error(result.data);
      }
    }else{
      const result = await addProduct(values);
      if (result.status === 201) {
        form.setFieldsValue(setProductValue(null));
        message.success("Success!");
        dispatch(closeModal());
        await getAllProducts();
      }else{
        message.error(result.data);
      }
    }
  }

  return (
    <Layout className="mh-100">
      <LeftSider
      name="John Doe"
      items={[
        {
          key: '1',
          label: 'Product',
          icon: React.createElement(UploadOutlined),
          path: ROUTES.HOME,
        },
        {
          key: '2',
          label: 'Logout',
          icon: React.createElement(LogoutOutlined),
          onClick: () => logout()
        }
      ]} />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Row style={{ maxWidth: '1300px' }}>
              <Col flex="auto">
                <Title level={3}>Products</Title>
              </Col>
              <Col flex="0 1 110px">
                <Button type="primary" onClick={addProd}>Add Product</Button>
              </Col>
            </Row>
            <Row>
              <ListTable
              columns={ProductColumns(editProduct, delProduct, TableSearch)}
              data={products}
              pageSize={5}
              />
            </Row>
          </div>
        </Content>
        <PopupModal
        title={isEdit ? "Edit Product" : "Add Product"}
        content=
          {<Form
            form={form}
            onFinish={onFinish}
            initialValues={setProductValue()}
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            {isEdit && <Form.Item 
            className={ 'hidden' }
            name="id"
            label="ID"
            hasFeedback
            rules={[{ required: isEdit }]}>
              <Input />
            </Form.Item>}
            <Form.Item
            name="SKU"
            label="SKU"
            hasFeedback
            rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
            name="title"
            label="Title"
            hasFeedback
            rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
            name="image"
            label="ImageURL"
            hasFeedback
            rules={[
              { required: true },
              () => ({
                validator(_, value) {
                  if (!value) return Promise.reject();
                  if (!(/^(ftp|http|https):\/\/[^ "]+$/.test(value))) return Promise.reject("Invalid URL!");
                  return Promise.resolve();
                }
              })]}>
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5, span: 14 }}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>}
        />
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
};

export default Home;