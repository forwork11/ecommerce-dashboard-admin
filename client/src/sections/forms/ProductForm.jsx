import React from 'react';
import {
  Form,
  Input,
  Button,
  Modal
} from 'antd';
import { addProduct, updateProduct } from '../../services/productService';
import { useSelector, useDispatch } from 'react-redux';
import { modalClose, modalFields } from '../../actions/product';
import { useEffect } from 'react';

const ProductForm = ({
    loadProducts
}) => {
    const dispatch = useDispatch();
    const { modal } = useSelector(state => state.product);
    const [form] = Form.useForm();
    
    useEffect(() => {
        form.setFieldsValue({
          id: modal.fields?._id,
          SKU: modal.fields?.SKU,
          title: modal.fields?.title,
          image: modal.fields?.image,
        })
    }, [form, modal?.fields])
    
    const onFinish = async (values) => {
      if (modal.edit) {
        const result = await updateProduct(values.id, values);
        if (result.status === 204) {
          Modal.success({
            content: "Successfully submitted!"
          });
          dispatch(modalFields({}))
          dispatch(modalClose())
          await loadProducts();
        }else{
          Modal.error({
            title: "Error",
            content: result.data
          });
        }
      }else{
        const result = await addProduct(values);
        if (result.status === 201) {
          Modal.success({
            content: "Successfully submitted!"
          });
          dispatch(modalFields({}))
          dispatch(modalClose())
          await loadProducts();
        }else{
          Modal.error({
            title: "Error",
            content: result.data
          });
        }
      }
    }

    return (<Form
      form={form}
      onFinish={onFinish}
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      {modal.edit && <Form.Item 
      className={ 'hidden' }
      name="id"
      label="ID"
      hasFeedback
      rules={[{ required: modal.edit }]}>
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
    </Form>
    )
};

export default ProductForm;