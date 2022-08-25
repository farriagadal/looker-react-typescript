import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  background-color: #1B0088;
  width: 231px;
  padding-top: 40px;
  padding-left: 24px;

  @media only screen and (max-width: 600px) {
    width: 328px;
    min-width: 328px;
    position: fixed;
    z-index: 1;
    min-height: 100vh;
    animation: slide 0.5s forwards;
    left: -300px;
  }

  @keyframes slide {
    100% { left: 0; }
  }
`
export const ImgLogo = styled.div`
  width: 500px;
`
export const ListMenu = styled.div`
  display: block;
  padding-left: 5px;
  margin-top: 68px;

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
    font-family: 'Latam Sans';
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
    font-family: 'Latam Sans';
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

export const MobileSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 40px;
  margin-right: 14px;
  padding-bottom: 24px;
  border-bottom: solid 1px #ddd;
`

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1B0088;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 56px;
    height: 56px;
  }
`
export const Name = styled.div`
  position: relative;
  width: 250px;
  margin-left: 16px;

  p {
    font-family: 'Latam Sans';
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    color: #FFFFFF;
    margin: 0;
  }

  img {
    position: absolute;
    right: 0;
    top: 5px;
  }

  span {
    font-family: 'Latam Sans';
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  background: none;
  border: none;
`
