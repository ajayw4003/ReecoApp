import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import styled from 'styled-components';

const Navlinks = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  align-items: center;
  padding: 0px 10px 0px 10px;
  &:hover{
    cursor: pointer;
  }
`

const UserDiv = styled(Navlinks)`
  justify-content: space-around;
`
const ToolbarDiv = styled(Toolbar)`
  justify-content: space-between;
`
const LinkDiv = styled(Link)`
 text-decoration: none;
  color: white;
  margin-right: 10px;
  margin-left: 10px;
`
const NavbarDiv = styled(AppBar)`
  background-color: rgb(36, 117, 36) !important;
  color: white;
` 

const Navbar = () => {
  return (
    <div>
      <NavbarDiv position="static">
      <CssBaseline />
      <ToolbarDiv>
        <Navlinks>
          <Typography variant="h4">
            Reeco
          </Typography>
          <LinkDiv to="/">
            Store
          </LinkDiv>
          <LinkDiv to="/orders">
            Orders
          </LinkDiv>
          <LinkDiv to="/anaylytics">
            Analytics
          </LinkDiv>
        </Navlinks>
        <UserDiv>
          <ShoppingCartOutlinedIcon />
          <Navlinks>
            <span>Hello Capton America</span>
            <KeyboardArrowDownOutlinedIcon />
          </Navlinks>
        </UserDiv>
      </ToolbarDiv>
    </NavbarDiv>
    </div>
  );
};

export default Navbar;