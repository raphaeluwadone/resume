import React from 'react'
import Dev from '../../video/dev-icon.png'
import { AboutContainer, AboutContent, AboutH1, AboutImg, AboutImgWrap, AboutP, AboutWrapper } from './aboutElements'


function About() {
    return (
        <>
            <AboutContainer id="about">
                <AboutWrapper>
                    <AboutImgWrap>
                        {/* <i class="devicon-html5-plain" style={{fontSize: "100px", color: "red"}}></i> */}
                        <AboutImg src={Dev} width="100%"/>
                    </AboutImgWrap>
                    <AboutContent>
                        <AboutH1>
                            Knowing A Bit About Raphael.
                        </AboutH1>
                            <AboutP>
                                I am a front-end developer that is passionate about building efficient problem solving applications using modern technologies. 
                                
                                With a long lasting fascination about the web and its working principles, hence making me constantly driven to learn more and know more, 
                                
                                accepting that as a developer i'll forever be a student of the craft. 

                                I have a B.Eng in Electrical and Electronics Engineering. And a certificate of front-end web development immersive from Tech studio Academy, Nigeria.

                                I have a great desire to share my growing Knowledge in whatever capacity i can, either virtualy or in my everyday interaction.

                                A lover of Sports and good Music.
                                
                                I have found a purpose with programming and <span>I am enjoying my bitter sweet relationship with it.</span>
                            </AboutP>
                    </AboutContent>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
