import styled from 'styled-components'

export const FooterContainer = styled.div`
    padding: 25px 0;
    height: 650px;
    background: rgba(211, 211, 211);

`
export const FooterWrapper = styled.div`
    background: blue;
    width: 80%;
    height: 600px;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        width: 95%;
    }

`
export const FooterH1 = styled.h1`

`

export const FooterP = styled.p`
    width: 400px;
    margin: 8px;
    line-height: 30px;

    span {
        // background: #01bf71;
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

// git remote add origin https://github.com/raphaeluwadone/resume.git
// git branch -M main
// git push -u origin main