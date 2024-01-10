"use client";

import { signIn } from "@/actions/user";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

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

      // TODO: Understanding cookie/session etc from supabase
      localStorage.setItem("IS_AUTH", "true");
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ width: 700 }}>
      <Title level={2}>Connectez-vous</Title>
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

        <Form.Item>
          <Button htmlType="submit" style={{ width: "100%" }}>
            Se connecter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
