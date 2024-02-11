import React from "react";
import NetflixLogo from "../../../assets/Netflix-logo-red-black-png.png";
import SharedButton from "../../Reusable/Button";
import { Col, Flex, Row, Space } from "antd";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
    <Flex justify="space-between" align="center">
      <img src={NetflixLogo} alt="Netflix Logo" width={150} height={80} />
      <Space size={20} direction="horizontal" style={{marginRight: '20px'}}>
        <SharedButton color="red">Sign Up</SharedButton>
        <SharedButton>Sign In</SharedButton>
      </Space>
      </Flex>
    </div>
  );
};

export default Navbar;
