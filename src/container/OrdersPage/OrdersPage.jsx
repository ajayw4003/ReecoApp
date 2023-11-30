import React, { useEffect } from 'react';
import OrderPageHeader from './components/OrderPageHeader';
import OrderDetails from './components/OrderDetails';
import OrderContent from './components/OrderContent';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from './OrderDetailsSlice';

const ContentDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`

const OrdersPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading)
  useEffect(() => {
    dispatch(getOrderDetails());
  }, [])

  if(loading) {
    return <h2>No Data Found</h2>
  }
  return (
    <div>
      <OrderPageHeader />
      <ContentDiv>
        <OrderDetails />
        <OrderContent />
      </ContentDiv>
    </div>
  );
};

export default OrdersPage;