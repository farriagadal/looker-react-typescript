import styled from 'styled-components'

export const MenuNav = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  width: 143px;
  height: 104px;
  position: absolute;
  background-color: #ffffff;
  translate: -120px;
  border-radius: 4px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);

  li {
    list-style: none;
    display: flex;
  }

  li a {
    display: flex;
    color: #303030;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 21px 0px 0px -25px;

    span img {
      font-size: 1.3rem;
      color: blue;
      margin-right: 10px;
    }
  }
`
