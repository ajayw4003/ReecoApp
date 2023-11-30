import React from 'react';
import styled from 'styled-components';
import {
  Button
} from "@mui/material";
import {  useSelector } from 'react-redux';

// Styled components for different parts

const FlexDiv = styled.div`
  display: flex;
  align-items: center;  
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 10px 10px -10px #1b1a1a;
  padding : 25px;
  margin-bottom: 15px;
`

const CommonStyledButton  = styled(Button)`
&&{
    margin-right: 10px;
    background-color: white;
    border: 1px solid black;
    border-color: green;
    color: #0a880a;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: green;
      color: white;
    }
  }
`

const OrderPageHeader = () => {
  const orderDetails = useSelector(state => state.order.orderDetails)
  return (
        <HeaderDiv>
          <h2>
            Order {orderDetails.order_id}
          </h2>
          <FlexDiv>
            <CommonStyledButton variant='outlined'>Back</CommonStyledButton>
            <CommonStyledButton variant='outlined'>Approve order</CommonStyledButton>
          </FlexDiv>
        </HeaderDiv>
  );
};

export default OrderPageHeader;