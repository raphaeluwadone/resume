import styled from "styled-components"

export const ToolsWrapper = styled.div`
    background: #63DC4D;
    height: 650px;
    width: 100%;
    padding: 60px;


    @media screen and (max-width: 1000px) {

    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 15px;
        height: 650px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        padding: 12px;
        width: 100%;
        height: 900px;
    }

`

export const ToolsH1 = styled.h1`
text-shadow:  -2px 1px white;
`

export const ToolsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    flex-wrap: wrap;
    flex-dirextion: row;
    // background: cyan;
    width: 85%;
    margin-left: auto;

    @media screen and (max-width: 1000px) {
        width: 62%;
        height: 95%;

    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 20px auto;
        justify-content: space-evenly;
        height: 95%;
        align-items: center;

    }

    @media screen and (max-width: 580px) {
        font-size: 16px;
        // background: pink;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;

    }
`

export const ToolsP = styled.p`
    width: 450px;
    line-height: 24px;
    padding: 20px;
    // background: red;

    @media screen and (max-width: 768px) {
       margin: 0 auto;
       width: 100%;

    }

    @media screen and (max-width: 480px) {
        width: 100%;

    }
`

export const SingleTool = styled.div`
    margin: 8px 12px;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    p {
        font-weight: bolder;
        color: grey;
        text-shadow:  -1px 1px white;
    }

    @media screen and (max-width: 1000px) {
        margin: 0px 10px;
        height: 90px;
    }

    @media screen and (max-width: 768px) {
        margin: 8px 12px;
        height: 90px;
    }

`


export const ToolsImg = styled.div`
    width: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    i {
        color: white;
        font-size: 90px;
    }


    @media screen and (max-width: 768px) {
        width: 350px;
        i {
            font-size: 65px;
            
        }

    }

    @media screen and (max-width: 1000px) {

        i {
            font-size: 45px;
        }

    }

    @media screen and (max-width: 480px) {
        width: 100%;
        font-size: 16px;
        // background: red;
    }
`