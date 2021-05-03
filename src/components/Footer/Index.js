import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FooterContainer, FooterContent, FooterForm, FooterH1, FooterP, FooterSocials, FooterWrapper, SocialsLinks } from './FooterElements'


function Footer() {
    return (
        <>
            <FooterContainer id="contact">
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
                                <FaGithubSquare className="social-link"><Link to="https://github.com/raphaeluwadone"></Link></FaGithubSquare>
                                <FaInstagramSquare className="social-link"><Link to="https://www.instagram.com/_donatellofficial_/"></Link></FaInstagramSquare>
                                <FaLinkedin className="social-link"><Link  to="https://www.linkedin.com/in/raphael-uwadone-88509b1aa/"></Link></FaLinkedin>
                                <FaTwitterSquare className="social-link"><Link to="https://twitter.com/iam_donatello"></Link></FaTwitterSquare>
                            </SocialsLinks>
                        </FooterSocials>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
