import styled from 'styled-components'

export const AboutContainer = styled.div`
    
   
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 540px;
    max-height: 900px;
    // background: pink;
    width: 95vw;
    // max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 80px;
    grid-gap: 80px;
    grid-template-columns: 500px auto;
    background: yellow;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 200px 500px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 200px auto;
        padding: 24px;
        grid-gap: 20px;
        font-size: 12px;
        max-height: 600px;
    }


    @media screen and (max-width: 480px) {
        justify-content: center;
        padding: 10px;
        height: 800px;
        grid-template-rows: 250px auto;
    }

`
export const AboutImgWrap = styled.div`
    grid-column-start: 1;
    height: 200px;
    width: 200px;
    background: cyan;
`
export const AboutImg = styled.img`

`
export const AboutContent = styled.div`
    grid-column: 2 /-1;
    padding: 18px;

    @media screen and (max-width: 768px) {
        grid-column: 1 /-1;
        height: 500px;
    }
`

export const AboutH1 = styled.h1`
    color: black;
    text-shadow:  -2px 1px #05ff43;
`

export const AboutP = styled.p`
    margin-top: 30px;
    padding: 0 12px;
    height: 100%
    line-height: 24px;
    // background: red;
    // text-align: center;

    span {
        background: #01bf71;
        color: white;
        font-weight: bolder;
    }
`
