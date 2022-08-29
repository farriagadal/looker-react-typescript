import styled from 'styled-components'

export const ContainerPrincipal = styled.div`
  position: relative;
<<<<<<< HEAD
  margin-right: 24px;
=======
  margin-right: 10px;
>>>>>>> e82a4c6fdc122cb84ab76238e945aa4d43d160cc

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
    max-width: 388px;
    height: 326px;
  }
`

export const Container = styled.div`
  position: relative;
  max-width: 572px;
  height: 422px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.12);
  margin-bottom: 50px;
  overflow: hidden;

  iframe {
    height: 404px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (max-width: 768px) {
    max-width: 388px;
    height: 326px;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 19.2px;
    text-align: center;
    width: 114px;
    height: 44px;
    color: #929292;
    background-color: #ebebeb;
    text-align: center;
    padding: 12px;
    border-right: 0.5px solid #fff;
    cursor: pointer;
  }

  a:first-child {
    border-top-left-radius: 10px;
  }

  a:last-child {
    border-top-right-radius: 10px;
    border-right: none;
  }

  a:hover {
    color: #1b0088;
    border-bottom: 2px solid #ed1650;
    background-color: white;
  }

  .isSelected {
    color: #1b0088;
    border-bottom: 2px solid #ed1650;
    background-color: white;
  }

  @media screen and (max-width: 768px) {
  }
`
