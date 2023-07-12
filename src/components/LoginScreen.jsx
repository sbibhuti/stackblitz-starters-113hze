import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const form = Form.useForm();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const onValuesChange = (value) => {
    setFormValues({ ...formValues, ...value });
  };

  const onFinish = () => {
    console.log(formValues);
    navigate('/dashboard');
  };

  return (
    <>
      <Form
        name="Star Wars"
        form={form}
        onValuesChange={onValuesChange}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          label="Name"
          required={true}
          rules={[
            {
              required: true,
              message: 'username is required',
            },
          ]}
        >
          <Input placeholder="enter username" value={formValues.username} />
        </Form.Item>
        <Form.Item
          name="username"
          label="Name"
          required={true}
          rules={[
            {
              required: true,
              message: 'password is required',
            },
          ]}
        >
          <Input
            type="password"
            placeholder="enter password"
            value={formValues.username}
          />
        </Form.Item>
        <Form.Item>
          <Button type="submit">Login</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginScreen;
