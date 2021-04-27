import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ProjectContainer = styled.div`
    height: 1000px;
    background: #010606;
    width: 100%;
    padding: 24px 40px;

    @media screen and (max-width: 1000px) {
        height: 1350px
    }

    @media screen and (max-width: 768px) {
        height: 2500px
    }

    @media screen and (max-width: 480px) {
        height: 2500px
    }

`

export const ProjectWrapper = styled.div`
    max-width: 1000px
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 16px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectH1 = styled.h1`
    color: #fff;
    margin-bottom: 50px;
    text-shadow:  -2px 1px #01bf71;
`

export const ProjectCard = styled.div`
    background: #fff;
    position: relative;
    background-image: url('../../../public/Assets/good-faith-management-website-example.jpg');
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 20px;
    height: 350px;
    // padding: 30px;
    // box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition all 0.2s ease-in-out;    


    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
      
        
    }

`

export const ProjectContent = styled.div`
    background: rgba(9, 235, 66, 0.9);
    width: 100%;
    transition all 0.50s ease-in-out;
    padding: 10px 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
    z-index: 10;
    // transform: translateX(-110px);
`

export const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`

export const ContentH1 = styled.h1`
 font-size: 1.8rem;
 text-shadow: -1px 1px white;
 margin-bottom: 5px;

`
export const ContentP = styled.p`
    margin-bottom: 15px;    
    // font-weight: bold;
`
export const LinksWrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;

`

export const ProjectLink = styled(LinkR)`
    text-decoration: none;
    padding: 3px 11px;
    margin-right: 25px;
    font-size: 15px;
    font-weight: bold;
    border: 2px solid white;
    color: white;
    text-shadow: -1px 1px green;
    transition all 0.3s ease-in-out; 

    &:hover {
        box-shadow: -4px 5px green;
        background: white;
        color: green;
        text-shadow: none;
        cursor: pointer;
    }

    &:active {
        box-shadow: -2px 2px green;
    }

`
export const GitLink = styled(LinkR)`
    text-decoration: none;
    padding: 3px 11px;
    margin-left: 15px;
    font-size: 15px;
    font-weight: bold;
    border: 2px solid white;
    color: white;
    text-shadow: -1px 1px green;
    transition all 0.3s ease-in-out; 

    &:hover {
        box-shadow: -4px 5px green;
        background: white;
        color: green;
        text-shadow: none;
        cursor: pointer;
    }

    &:active {
        box-shadow: -2px 2px green;
    }
`