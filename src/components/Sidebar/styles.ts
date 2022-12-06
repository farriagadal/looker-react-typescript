import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  background: #E2E2E2;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.1);
  min-width: 269px;
  padding-top: 25px;
  /* @media only screen and (max-width: 600px) {
    width: 328px;
    min-width: 328px;
    position: fixed;
    z-index: 1;
    min-height: 100vh;
    animation: slide 0.5s forwards;
    left: -300px;
  } */
/* 
  @keyframes slide {
    100% { left: 0; }
  } */
`
export const ImgLogo = styled.div`
  display: flex;
  justify-content: center;
`
export const ListMenu = styled.div`
  display: block;
  margin-top: 68px;
  padding-left: 24px;

  @media only screen and (max-width: 600px) {
    margin-top: 36px;
  }
`
export const ItemMenu = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  opacity: 0.7;

  &.active {
    opacity: 1;
  }

  img {
    margin-right: 15px;
  }

  span {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: white;
  }
`
export const SubListMenu = styled.div`
  display: block;
  margin-top: -15px;
  margin-bottom: 20px;
`
export const SubItemMenu = styled(NavLink)`
  opacity: 0.7;

  &.active {
    opacity: 1;

    span {
      font-weight: 600;
      border-color: #fff;
    }
  }

  span {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    height: 29px;
    border-left: 2px solid transparent;
    display: flex;
    align-items: center;
    padding-left: 24px;
    margin-left: 9px;
  }
`


export const MenuBtn = styled.button`
  border: none;
  background: none;
  padding: 0;
  position: absolute;
  top: 25px;
  left: 29px;
`

export const Welcome = styled.h2`
  font-family: 'Plus Jakarta Sans';
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #000000;
  margin-top: 20px;
`