import React from 'react'
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FooterContainer, FooterContent, FooterForm, FooterH1, FooterP, FooterSocials, FooterWrapper, SocialsLinks } from './FooterElements'


function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterH1>Get In Touch</FooterH1>
                    <FooterP>Dropping a line to say goodday, ask for my resume or see if we can work together to build something awesome? <span>Please don't hesitate to reach out!</span></FooterP>
                    <FooterContent>
                        <FooterForm>
                            <input type="text"/>
                            <input type="email" />
                            <textarea type="textbox"></textarea>
                            <button type="submit">Submit</button>
                        </FooterForm>
                        <FooterSocials>
                            <p>You can also find me on any of these social spaces. If you're feeling social</p>
                            <SocialsLinks>
                                <FaGithubSquare className="social-link"></FaGithubSquare>
                                <FaInstagramSquare className="social-link"></FaInstagramSquare>
                                <FaLinkedin className="social-link"></FaLinkedin>
                                <FaTwitterSquare className="social-link"></FaTwitterSquare>
                            </SocialsLinks>
                        </FooterSocials>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
