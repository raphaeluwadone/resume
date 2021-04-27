import React from 'react'
import { ToolsContainer, ToolsH1, ToolsWrapper, ToolsP, ToolsImg, SingleTool } from './ToolsElements'


function Tools() {
    return (
        <ToolsWrapper>
            <ToolsH1>My Tool Kit .</ToolsH1>
            <ToolsContainer>
            <ToolsP>These are the some of the tools & skills i have picked up along the way and frequently use. Though i am constantly looking to add more to my arsenal. (Currently learning TypeScript)</ToolsP>
                <ToolsImg>
                    <SingleTool>
                        <i class="devicon-html5-plain"></i>
                        <p>HTML 5</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-css3-plain"></i>
                        <p>CSS 3</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-javascript-plain"></i>
                        <p>JavaScript</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-react-original"></i>
                        <p>React</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-git-plain"></i>
                        <p>GIT</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-github-original"></i>
                        <p>GitHub</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-visualstudio-plain"></i>
                        <p>VS Code</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-bootstrap-plain"></i>
                        <p>Bootstrap</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-sass-original"></i>
                        <p>SASS</p>
                    </SingleTool>
                    <SingleTool>
                        <i class="devicon-firebase-plain"></i>
                        <p>Firebase</p>
                    </SingleTool>
                </ToolsImg>
            </ToolsContainer>
        </ToolsWrapper>
    )
}

export default Tools
