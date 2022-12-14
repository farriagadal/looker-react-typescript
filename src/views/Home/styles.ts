import styled from 'styled-components'

export const Container = styled.div`
  padding: 48px 27px;

  h1 {
    font-family: 'Latam Sans';
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1b0088;
    margin: 0;
    margin-bottom: 35px;
  }

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
`

export const Box = styled.div`
  display: flex;
`

export const Metrics = styled.div``
export const BoxTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 24px;
  flex-wrap: wrap;

  @media screen and (max-width: 1092px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));

    :last-child {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    row-gap: 60px;
  }
`

export const Titles = styled.div`
  display: flex;

  h2:first-child {
    margin-right: 25%;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`
