import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const products = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5",
  "Product 6",
  "Product 7",
  "Product 8",
  "Product 9",
  "Product 10",
  "Product 11",
  "Product 12",
  "Product 13",
];

function handleClick(e) {
  console.log("click", e);
}
const ProductsMenu = () => {
  return (
    <Menu
      onClick={handleClick}
      style={{ border: 0 }}
      mode="vertical"
      defaultActiveFirst={products[0]}
      defaultValue={products[0]}
    >
      {products.map((each, index) => {
        return (
          <Menu.Item style={{ width: "380px" }} key={each}>
            {each}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default ProductsMenu;
