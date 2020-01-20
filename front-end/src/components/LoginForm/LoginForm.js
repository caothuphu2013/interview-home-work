import React from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Spin, Alert } from "antd";
import "./styles.scss";
const FormItem = Form.Item;

const LoginForm = (props) => {
  const { form, isFetching, error, handleLogin } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        handleLogin(values);
      }
    });
  };

  const formLayout = (
    <>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
        />
      )}

      <br />
      <FormItem>
        {getFieldDecorator("username", {
          rules: [
            {
              required: true,
              message: "Please input your username!"
            }
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="username"
          />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
          />
        )}
      </FormItem>

      <FormItem>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <Button type="primary" htmlType="submit" className="login-form__button">
          Login
        </Button>
        Or <Link to='/register'>register now!</Link>
      </FormItem>
    </>
  );

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <legend className="login-form__title">
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

export default Form.create()(LoginForm);
