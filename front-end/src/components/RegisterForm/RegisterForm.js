import React, { useState } from 'react';
import { Form, Icon, Input, Button, Spin, Alert } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';
const FormItem = Form.Item;

const RegisterForm = (props) => {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const { form, isFetching, error, handleRegister } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        handleRegister(values);
      }
    });
  };

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const formLayout = (
    <>
      {error && <Alert message="Error" description={error} type="error" showIcon />}
      <br />
      <FormItem>
        {getFieldDecorator('username', {
          rules: [
            {
              required: true,
              message: 'Please input your username!'
            }
          ]
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />)}
      </FormItem>
      <FormItem hasFeedback>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }, { validator: validateToNextPassword }]
        })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />)}
      </FormItem>
      <FormItem hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [{ required: true, message: 'Please confirm your Password!' }, { validator: compareToFirstPassword }]
        })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm Password" onBlur={handleConfirmBlur} />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your full name!' }]
        })(<Input prefix={<Icon type="meh" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Name" />)}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" className="register-form__button">
          Register
        </Button>
      </FormItem>
      Have already an account? <Link to="/login"> Login here</Link>
    </>
  );

  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <legend className="register-form__title">
        <img src="https://zigvy.com/wp-content/uploads/2018/03/zigvylogo.png" alt="Zigvy logo" />
      </legend>

      {isFetching && (
        <Spin tip="Loading ..." size="large">
          {formLayout}
        </Spin>
      )}
      {!isFetching && formLayout}
    </Form>
  );
};

export default Form.create()(RegisterForm);
