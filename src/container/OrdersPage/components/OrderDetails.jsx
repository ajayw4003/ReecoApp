import React from 'react';
import {
  Typography,
} from "@mui/material";

import styled from 'styled-components';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import { useSelector } from 'react-redux';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content  : space-around;
  border: 2px solid #1e1c1c11;
  border-radius: 5px;
  padding: 15px;
`;

const BoldDiv = styled.div`
  font-weight: 600;
  flex-wrap: wrap;
  word-break: break-all;
`
const DivBlock = styled.div`
  align-items: center;
`
const Divide = styled.div`
  border-left: 2px solid #cbcbcb;
  height: 60px;
`
const CatDiv = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const OrderDetails = () => {
  const orderDetails = useSelector(state => state.order.orderDetails)
  return (
    <FlexDiv>
      <DivBlock>
        <Typography variant='subtitle2'>Supplier</Typography>
        <BoldDiv>{orderDetails.supplier}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Shiiping Date</Typography>
        <BoldDiv>{orderDetails.shipping_date}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Total</Typography>
        <BoldDiv>{orderDetails.total_cost}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Category</Typography>
        <CatDiv>
          <IcecreamOutlinedIcon />
          <FastfoodOutlinedIcon />
          <RamenDiningOutlinedIcon />
        </CatDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Department</Typography>
        <BoldDiv>{orderDetails.department}</BoldDiv>
      </DivBlock>
      <Divide />
      <DivBlock>
        <Typography variant='subtitle2'>Status</Typography>
        <BoldDiv>{orderDetails.status}</BoldDiv>
      </DivBlock>
    </FlexDiv>
  );
};

export default OrderDetails;