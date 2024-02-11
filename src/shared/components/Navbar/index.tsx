import React from "react";
import NetflixLogo from "../../../assets/Netflix-logo-red-black-png-removebg-preview.png";
import SharedButton from "../../Reusable/Button";
import { Flex, Space } from "antd";
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
    <Flex justify="space-between" align="center">
      <img src={NetflixLogo} alt="Netflix Logo" width={150} height={80} />
      <Space size={20} direction="horizontal" style={{marginRight: '20px'}} className="navbar-buttons">
        <SharedButton color="red">Sign Up</SharedButton>
        <SharedButton>Sign In</SharedButton>
      </Space>
      </Flex>
    </div>
  );
};

export default Navbar;
