import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';

const PopupDiv = styled.div`
justify-content: center;
align-items: center;
position: fixed;
height: 25%;
width: 35%;
padding: 15px;
background-color: #ffffff;
transition: .2s ease-in-out;
border: 1px solid #3b3838;
border-radius: 5px;
margin: auto;
top: 35%;
left: 30%;
z-index: 2;
;
`


const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  align-items: center;
`
const HoverButton = styled(Button)`
  &&{&:hover{
    background-color: #a59b9b;
  }}
`

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
`
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const IconDiv = styled(ClearIcon)`
  cursor: pointer;
`

const ConfirmPopup = (props) => {
  const { message, yesHandler, closeHandler, noHanlder, title="Alert" } = props;
  function confirm() {
    yesHandler()
  }

  function closeBox() {
    closeHandler();
  }
  return (
    <ModalContainer>
      <PopupDiv>
        <TitleDiv>
          <h3>{title}</h3>
          <IconDiv onClick={closeBox}  />
        </TitleDiv>
        <div>
        {message}
        </div>
        <ButtonDiv>
          <HoverButton onClick={confirm}>Yes</HoverButton>
          <HoverButton onClick={closeBox}>No</HoverButton>
        </ButtonDiv>
      </PopupDiv>
    </ModalContainer>
  );
};

export default ConfirmPopup;