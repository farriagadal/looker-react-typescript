import styled from 'styled-components'

export const Overley = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
`
export const Container = styled.div`
width: 717px;
height: 480px;
min-height: 100px;
background: #fff;
position: relative;
border-radius: 8px;
overflow: hidden;

h3{
    font-family: 'Latam Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
    margin-top: 11px;
    margin-bottom: 22px;
}

iframe {

    lk-explore-dataflux.look.embed lk-explore-header, lk-explore-dataflux.query lk-explore-header {
    width: 100%;
    height: 24px;
    margin: 8px 0px;
    padding: 0 8px;
    /* borre zindex para ver si funcionaba */
    background: blue;
    border: 0 none;
}
}
`

export const Title = styled.div`
    padding-top: 19px;
    font-family: 'Latam Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #1B0088;
`
let lkExploreHeader = document.querySelector("lk-explore-header");
console.log(lkExploreHeader)

