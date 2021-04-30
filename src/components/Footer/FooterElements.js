import styled from 'styled-components'

export const FooterContainer = styled.div`
    padding: 25px 0;
    height: 650px;
    background: rgba(211, 211, 211);

    @media screen and (max-width: 1000px) {
        height: 900px;
    }

`
export const FooterWrapper = styled.div`
    // background: blue;
    width: 80%;
    height: 600px;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        width: 95%;
    }
    
    @media screen and (max-width: 1000px) {
        height: 850px;
    }

`
export const FooterH1 = styled.h1`

`

export const FooterP = styled.p`
    width: 400px;
    margin: 8px;
    line-height: 30px;

    span {
        background: #01bf71;
        text-shadow: -1px 1px black;
        color: white;
        font-weight: bolder;
        padding: 4px 7px;
    }

`
export const FooterContent = styled.div`
    // background: yellow;
    width: 100%;
    display: flex;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    

`
export const FooterForm = styled.form`
    // background: red;
    width: 50%;

    input {
        height: 55px;
        width: 450px;
        margin: 15px 25px;
        font-size: 18px;
        box-shadow: 3px 3px #63DC4D;
        padding-left: 20px;
        border: none;

        &:focus {
            outline: none;
        }
    }

    textarea {
        width: 450px;
        height: 200px;
        margin-left: 25px;
        padding-let: 25px;
        font-size: 18px;
        box-shadow: 3px 3px #63DC4D;

        &:focus {
            outline: none;
        }
    }

    button {
        display: block;
        margin: 25px;
        border-radius: 5px;
        border: 2px solid #63dc4d;
        cursor: pointer;
        padding: 7px 20px;
        transition: all .2s ease-in;
        font-weight: bold;
        color: green;

        &:hover {
            box-shadow: -3px 3px green;
        }

        &:focus {
            outline: none;
            transform: scale(.95);
        }
    }

    @media screen and (max-width: 1000px) {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            margin: 15px 0;
        }

        textarea {
            margin-left: 0;
        }

        button {
            margin-left: 0;
        }
    }

    @media screen and (max-width: 425px) {
        width: 95%;
        input {
            height: 55px;
            width: 100%;
        }
        textarea {
            width: 100%
        }
    }

`

export const FooterSocials = styled.div`
    color: #63DC4D;
    // background: cyan;
    width: 400px;
    p {
        font-size: 18px;
        font-weight: bold;

        color: black;
        text-shadow: -1px 1px white; 
    }
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
    export const SocialsLinks = styled.div`
    font-size: 30px;
    margin-top: 30px;
    // background: pink;
    .social-link {
        cursor: pointer;
        margin: 10px;
        transition: all 0.25s ease-in-out;

        &:hover {
            color: green;
            transform: scale(1.2);
            // font-size: 32px;
            
        }
    }


`
