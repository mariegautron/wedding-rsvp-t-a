"use client";

import { signIn } from "@/actions/user";
import { Button, Checkbox, Form, Input } from "antd";

export interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}
const LoginForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: LoginFormValues) => {
    try {
      await signIn(values);
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: 300 }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
