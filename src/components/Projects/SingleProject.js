import React, {useState} from "react";
import { ContentH1, ContentP, GitLink, LinksWrapper, ProjectCard, ProjectContent, ProjectLink, ProjectImg } from "./ProjectsElements";


function SingleProject(props) {

    const [showContent, setShowContent] = useState(false);
  return (
    <>
      <ProjectCard
        onMouseOver={() => setShowContent(true)}
        onMouseOut={() => setShowContent(false)}
      >
        <ProjectImg src={props.img} onMouseOver={() => setShowContent(true)} onMouseOut={() => setShowContent(false)}/>
          <ProjectContent style={{ opacity: `${showContent ? "1" : "0"}` }}>
            <ContentH1>{props.title}</ContentH1>
            <ContentP>
              {props.desc}
            </ContentP>
            <LinksWrapper>
              <ProjectLink>Go Live</ProjectLink>
              <GitLink>Go Git</GitLink>
            </LinksWrapper>
          </ProjectContent>
      </ProjectCard>
    </>
  );
}

export default SingleProject;
