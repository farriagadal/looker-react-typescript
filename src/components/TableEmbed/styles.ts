import styled from 'styled-components'

export const ContainerPrincipal = styled.div`
  position: relative;
<<<<<<< HEAD
  margin-right: 24px;
=======
  margin-right: 10px;
<<<<<<< HEAD
>>>>>>> e82a4c6fdc122cb84ab76238e945aa4d43d160cc
=======
  width: 100%;
  margin-top: 18px;
>>>>>>> LastChange4

  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: #303030;
  }

  h2::before {
    content: '|';
    margin-right: 8px;
    color: #ed1650;
  }

  @media screen and (max-width: 768px) {
    height: 326px;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 422px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.12);
  margin-bottom: 50px;
  overflow: hidden;
  margin-right: 10px;

  iframe {
    height: 404px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (max-width: 768px) {
    height: 326px;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  .menu {
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.2px;
    text-align: center;
    height: 44px;
    color: #929292;
    background-color: #ebebeb;
    text-align: center;
    padding: 12px;
    border-right: 0.5px solid #fff;
    cursor: pointer;
  }

  .menu:first-child {
    border-top-left-radius: 10px;
  }

  .menu:last-child {
    border-top-right-radius: 10px;
    border-right: none;
  }

  .menu:hover {
    color: #1b0088;
    border-bottom: 2px solid #ed1650;
    background-color: white;
  }

  .isSelected {
    color: #1b0088;
    border-bottom: 2px solid #ed1650;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-right: 0;
  }

  @media screen and (max-width: 768px) {
  }
`

export const MenuList = styled.div`
  margin-top: -2px;
  cursor: pointer;
  a {
    background-color: #fff;
    img:hover {
      filter: invert(23%) sepia(93%) saturate(6437%) hue-rotate(336deg)
        brightness(96%) contrast(93%);
    }
  }
`
