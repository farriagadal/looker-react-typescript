import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: inline;
  position: relative;
  bottom: -38rem;

  @media screen and (max-width: 1030px) {
    bottom: -72rem;
  }

  @media screen and (max-width: 768px) {
    bottom: -54rem;
  }

  h3 {
    font-family: 'Latam Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    color: white;
  }
`;
