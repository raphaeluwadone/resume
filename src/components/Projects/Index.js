import React, {useState} from 'react'
import { ProjectContainer, ProjectH1, ProjectWrapper } from './ProjectsElements'
import SingleProject from './SingleProject'


function Projects() {

    return (
        <ProjectContainer id="projects">
            <ProjectH1>Some of my works</ProjectH1>
            <ProjectWrapper>
                <SingleProject title={"Covid-19 Tracker"} desc={"A simple app that tracks the covid cases all around the world and maps them out pictorially"} img={"https://res.cloudinary.com/rafael-uwadone/image/upload/v1620063926/Portfolio%20/covid-tracker_tnrj5a.png"} links={{git:"https://github.com/raphaeluwadone/covid-tracker", live:"https://rafaels-covid-tracker.netlify.app/"}}/>
                <SingleProject title={"Hervest"} desc={"An online financial saving platform"} img={"https://res.cloudinary.com/rafael-uwadone/image/upload/v1620063925/Portfolio%20/hervest_zxlvsa.png"} links={{git:"https://bitbucket.org/marvelsofttechnologies/hervestfe/src/raphael/", live:"https://hervestuser.netlify.app/"}}/>
                <SingleProject title={"City Tech"} desc={"A Website for smart home appliances"} img={"https://res.cloudinary.com/rafael-uwadone/image/upload/v1620063926/Portfolio%20/city-tech_fkskkc.png"} links={{git:"https://github.com/raphaeluwadone/cityTech", live:"https://citytech-alpha-test.netlify.app/"}}/>
                <SingleProject title={"Result Portal"} desc={"A Web app that helps in result compilation for OAU"} img={"https://res.cloudinary.com/rafael-uwadone/image/upload/v1620063927/Portfolio%20/result-portal_p3kx1v.png"} links={{git:"https://github.com/raphaeluwadone/result-app/tree/main/Rafaels%20react%20projects/result-portal-redux/result-portal", live:"https://intellisystem.herokuapp.com/"}}/>
                <SingleProject title={"Color Generator"} desc={"An app that takes valid hex color codes and gives 10 tints and shades with their corresponding complementary colors"} img={"https://res.cloudinary.com/rafael-uwadone/image/upload/v1620077217/Portfolio%20/color-generator_kwdtko.png"} links={{git:"https://github.com/raphaeluwadone/color-gen", live:"https://comp-color-gen.netlify.app/"}}/>
                <SingleProject title={"ChitChat"} desc={"A Realtime messaging app using socket.io. (Still in development)"} links={{git:"https://github.com/raphaeluwadone/covid-tracker", live:"https://hervestuser.netlify.app/"}}/>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects
