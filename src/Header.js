import React, { useState } from "react";
import { Layout, Menu, Button, Modal, Form, Input } from "antd";
import "antd/dist/reset.css";

const { Header } = Layout;

const CustomHeader = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const showLoginModal = () => {
    setLoginVisible(true);
  };

  const hideLoginModal = () => {
    setLoginVisible(false);
  };

  const handleLogin = (values) => {
    // Xử lý logic đăng nhập
    console.log("Thông tin đăng nhập:", values);
    hideLoginModal();
  };

  const showRegisterModal = () => {
    setRegisterVisible(true);
  };

  const hideRegisterModal = () => {
    setRegisterVisible(false);
  };

  const handleRegister = (values) => {
    // Xử lý logic đăng ký
    console.log("Thông tin đăng ký:", values);
    hideRegisterModal();
  };

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ float: "left" }}>
        <Menu.Item key="1">Trang chủ</Menu.Item>
        <Menu.Item key="2">Giới thiệu</Menu.Item>
        <Menu.Item key="3">Thông tin</Menu.Item>
      </Menu>
      <div style={{ float: "right" }}>
        <Button type="primary" style={{ marginRight: "10px" }} onClick={showLoginModal}>
          Đăng nhập
        </Button>
        <Button type="primary" onClick={showRegisterModal}>
          Đăng ký
        </Button>
        <Modal
          title="Đăng nhập"
          visible={loginVisible}
          onCancel={hideLoginModal}
          footer={null}
        >
          <Form onFinish={handleLogin}>
            <Form.Item
              name="username"
              label="MSSV"
              rules={[{ required: true, message: "Vui lòng nhập MSSV!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Đăng ký"
          visible={registerVisible}
          onCancel={hideRegisterModal}
          footer={null}
        >
          <Form onFinish={handleRegister}>
            <Form.Item
              name="username"
              label="MSSV"
              rules={[{ required: true, message: "Vui lòng nhập MSSV!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Vui lòng nhập địa chỉ email!" },
                { type: "email", message: "Địa chỉ email không hợp lệ!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại!" },
                    { pattern: /^[0-9]+$/, message: "Số điện thoại không hợp lệ!" },
                ]}
                >
                <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Header>
  );
};

export default CustomHeader;