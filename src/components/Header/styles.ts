import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 76px;
  background: #fff;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.12);
  padding: 15px 24px;

  h1 {
    font-family: 'Latam Sans';
    font-style: italic;
    font-weight: 400;
    color: #1B0088;
    font-size: 20px;
    margin: 0;
  }

  h2 {
    font-family: 'Latam Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #303030;
    margin: 0;
  }
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1B0088;
  overflow: hidden;
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer
`
