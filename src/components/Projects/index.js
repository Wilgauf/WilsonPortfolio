import React from 'react'
import Icon1 from '../../images/icon1.jpg'
import Icon2 from '../../images/icon2.svg'
import logo from '../../images/WilsonLogo.png'
import ace from '../../images/Ace.jpg'
import { animateScroll as scroll } from 'react-scroll'
// import Icon3 from '../../images/icon3'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectLink } from './ProjectsElements'

const Projects = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectLink href="//www.youtube.com/watch?v=68YFkcrH1Wg&t=1s" target="_blank">
                    <ProjectsCard>
                        <ProjectsIcon src={Icon1}/>
                        <ProjectsH2>Trippy</ProjectsH2> 
                        <ProjectsP>Worked on a team to create a full stack React and Django based app that utilizes Google's Maps and Places API to serve up unique roadtrip options for users based on input.</ProjectsP>
                    </ProjectsCard>
                    </ProjectLink>
                    <ProjectLink href="//github.com/Wilgauf/nhl-fantasy" target="_blank">
                    <ProjectsCard>
                        <ProjectsIcon src={Icon2}/>
                        <ProjectsH2>NHL Fantasy Tracker</ProjectsH2>
                        <ProjectsP>Built a NHL fantasy tracker utilizing the NHL's API, React, Django and PostgreSQL. Provides stats for players that will be active for the current day so the user can decide to play them or not. </ProjectsP>
                    </ProjectsCard>
                    </ProjectLink>
                    <ProjectsCard onClick={toggleHome}>
                        <ProjectsIcon src={logo}/>
                        <ProjectsH2>Portfolio</ProjectsH2>
                        <ProjectsP>React based Portfolio/Website that leaverages styled componenets to showcase a variety of styling and effects. Integrated re-useable components and designed with multiple uses in mind. </ProjectsP>
                    </ProjectsCard>
                    <ProjectLink href="https://blackjackfrontend.herokuapp.com/" target="_blank">
                    <ProjectsCard>
                        <ProjectsIcon src={ace}/>
                        <ProjectsH2>Black Jack Web App</ProjectsH2>
                        <ProjectsP>Participated in mintbean.io's hackathon where I created the react frontend for a blackjack web application and assisted <a href='https://www.linkedin.com/in/joshua-franklin0352' target="_blank">Joshua Franklin</a> with the Django Rest Framework backend.</ProjectsP>
                    </ProjectsCard>
                    </ProjectLink>
                </ProjectsWrapper>

            </ProjectsContainer>  
        </>
    )
}

export default Projects
