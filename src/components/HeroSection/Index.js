import React, {useEffect, useState} from 'react'
import Video from '../../video/video.mp4'
import { HeroBg, VideoBg, HeroContainer, HeroGreeting, HeroContent, HeroH1, HeroP } from './HeroElements'

function HeroSection() {

    const [greeting, setGreeting] = useState()


        useEffect(() => {
            const hour = new Date().getHours()
            if(hour >= 0 && hour < 12){
                setGreeting("Morning")
            }else if(hour >= 12 && hour < 17){
                setGreeting("Afternoon")
            }else if(hour >= 17 && hour <= 23){
                setGreeting("Evening")
            }
        }, [])

    return (
        <HeroContainer id="hero">
            <HeroBg>
                <VideoBg autoPlay loop src={Video} muted type='video/mp4' />
            </HeroBg>
                <HeroGreeting>
                Good, {greeting}
                </HeroGreeting>
            <HeroContent>
                <HeroH1>
                    Hi, I am RAPHAEL
                </HeroH1>
                <HeroP>
                    A Front-end Web Developer with a passion for using modern technology to build cool stuff.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
