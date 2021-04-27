import React, {useState} from 'react'
import { ProjectContainer, ProjectH1, ProjectWrapper } from './ProjectsElements'
import SingleProject from './SingleProject'


function Projects() {

    return (
        <ProjectContainer id="projects">
            <ProjectH1>Some of my works</ProjectH1>
            <ProjectWrapper>
                <SingleProject title={"Color Generator"} desc={"A simple app that generates color Codes for tints and shades as well as compliments of the color "}/>
                <SingleProject title={"Lyrically"} desc={"A music lyrics app using Musixmatch Api"} img={"https://res.cloudinary.com/rafael-uwadone/image/upload/v1619386499/Portfolio%20/good-faith-management-website-example_wgktjv.jpg"}/>
                <SingleProject title={"City Tech"} desc={"A Website for smart home appliances"}/>
                <SingleProject title={"City Tech Revised"} desc={"A Reactored code or the city Tech website"}/>
                <SingleProject title={"SlackClone"} desc={"A Clone or the popular messaging App, Slack"}/>
                <SingleProject title={"Covid Tracker"} desc={"An app that tracks the number of covid 19 cases around the world"}/>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects
