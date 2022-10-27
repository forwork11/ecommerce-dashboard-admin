import React from 'react';
import {
  Form,
  Input,
  Button,
  message,
  Checkbox
} from 'antd';
import { login } from '../../services/loginService';
import { setAuth } from '../../utils/auth';
import ROUTES from '../../constants/routes';
import { useDispatch } from 'react-redux';
import { storeUser } from '../../actions/user';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const result = await login(values);
    if (result.status === 200) {
      message.success("Success!");
      const user = result.data;
      dispatch(storeUser(user));
      setAuth(user.auth);
      navigate(ROUTES.HOME);
    }else{
      message.error(result.data);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
    name="basic"
    labelCol={{
        span: 8,
    }}
    wrapperCol={{
        span: 8,
    }}
    initialValues={{
        remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
    <Form.Item
        label="Email"
        name="email"
        rules={[
        {
            required: true,
            message: 'Please input your email!',
        },
        () => ({
          validator(_, value) {
            if (!value) return Promise.reject();
            if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value))) return Promise.reject("Invalid Email!");
            return Promise.resolve();
          }
        })
        ]}
    >
        <Input />
    </Form.Item>

    <Form.Item
        label="Password"
        name="password"
        rules={[
        {
            required: true,
            message: 'Please input your password!',
        },
        ]}
    >
        <Input.Password />
    </Form.Item>

    <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
        offset: 8,
        span: 16,
        }}
    >
        <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
        wrapperCol={{
        offset: 8,
        span: 16,
        }}
        style={{
            marginBottom: '0px'
        }}
    >
        <Button type="primary" htmlType="submit">
        Login
        </Button>
    </Form.Item>
    </Form>
  );
};

export default LoginForm;