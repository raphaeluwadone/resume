import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    text-shadow:  -2px 2px #01bf71;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;

    }

`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 26px;
    text-align: center;
    max-width: 600px;
    font-weight: bolder;
    text-shadow:  -2px 1px #01bf71;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;

    }
`

export const HeroGreeting = styled.h2`
    color: #fff;
    font-size: 40px;
    text-align: center;
    position: absolute;
    color: #fff;
    z-index: 4;
    padding-left: 10px;
    // border-left: 5px solid #01bf71;
    font-family: 'Original Surfer', cursive;
    letter-spacing: 4px;
    top: 15%;
    right: 20%;
    transform: rotate(10deg);
    width: 50px ;
    padding-bottom: 8px;
    text-shadow:  -1px 3px #01bf71;
    border-bottom: 5px solid #01bf71;

    &:before{
        content: .;
        width: 10px;
        height: 40px;
        color: #01bf71
        background: #01bf71;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
        right: 25%;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;

    }
`