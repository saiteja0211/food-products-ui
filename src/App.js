import React from "react";
import { Layout, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import ProductsMenu from "./components/ProductsMenu";
import ProductTable from "./components/ProductTable";

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header
      style={{ position: "fixed", zIndex: 1, width: "100%", color: "#fff" }}
    >
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li style={{ float: "right", color: "#fff" }}>
          <a class="active" href="#about">
            About
          </a>
        </li>
      </ul>
    </Header>
    <Content
      className="site-layout"
      style={{ padding: "0 10px", marginTop: 64 }}
    >
      <Row>
        <Col xs={24} md={8}>
          <div
            className="card-background"
            style={{
              padding: 24,
              minHeight: 380,
              maxHeight: 380,
              overflow: "scroll",
            }}
          >
            <ProductsMenu />
          </div>
        </Col>
        <Col xs={24} md={16}>
          <div
            className="card-background"
            style={{ padding: 24, minHeight: 380, maxHeight: 380 }}
          >
            Product Info
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <div
            className="card-background"
            style={{ padding: 24, minHeight: 380, maxHeight: 380 }}
          >
            <ProductTable />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div
            className="card-background"
            style={{ padding: 24, minHeight: 380, maxHeight: 380 }}
          >
            Video
          </div>
        </Col>
      </Row>
    </Content>
    <Footer style={{ textAlign: "center" }}>©Food Products 2021</Footer>
  </Layout>
);

export default App;
