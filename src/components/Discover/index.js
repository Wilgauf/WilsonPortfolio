import React from 'react'
import  img from '../../images/Wilson.jpg'
import { Link } from 'react-router-dom'
import resume from '../../images/Resume.jpg'
import { DiscoverContainer, DiscoverWrapper, DiscoverRow, Column1, Column2, ImgWrap, Img, DiscoverHeader, TextWrapper, ImgSM, InfoText, InfoWrapper } from './DiscoverElements'
import Typical from 'react-typical'
const Discover = () => {
    return (
        <>
            <DiscoverContainer id="discover">
                <DiscoverWrapper>
                    <TextWrapper>
                        <DiscoverHeader>Discover <Typical 
                        steps={['Wilson', 3000, 'Petty Officer Gauf' , 3000, 'Willy' , 3000, 'me' , 20000]}
                        loop={5}
                        wrapper="b" /></DiscoverHeader>
                    </TextWrapper>
                    <DiscoverRow>
                        
                        <Column1>
                            <ImgWrap>
                                <ImgSM src={img} alt={'Photo of Wilson'} />
                                <InfoText>
                                Over the course of a relatively short lifetime, I've done some amazing things. Learning languages I hadn't even heard of before, teaching a new generation of linguists, deploying to the Middle East, and growing into a new role as a Full Stack Software Engineer. Learn even more about my professional career from my 
                                <Link to="../../files/Resume.pdf" target="_blank" download>Resume</Link>
                                <a href='../../files/Resume.pdf' >Resume</a>
                            </InfoText>
                            </ImgWrap>
                        
                        </Column1>
                        <Column2>
                            <InfoWrapper>
                                <InfoText>
                                    Born in Detroit, I love the Red Wings and have since birth thanks to my Dad the die hard fan. I spent most of my youth in Indianapolis where I discovered my love of swimming and pretty much anything outdoors. Then I moved onto a new adventure in the Navy...
                                </InfoText>
                                <InfoText>
                                    After graduating from bootcamp I moved to Monterey, CA where I learned Persian-Farsi to work as a Crytpologic Linguist. About a year and a half later, I flew to Augusta, GA to start my career as a linguist and meet some of the best friends I've ever had. Luckily Georgia has plenty of lakes and beautiful hiking to explore in my offtime. 
                                </InfoText>
                                <InfoText>
                                    Both Hockey and my love for the outdoors inspired my first projects as a Software Engineer which sparked a fire  in me. My curiosity to solve some of my own everyday problems birthed a passion to start solving more complex problems and dream bigger each time. 
                                </InfoText>
                            </InfoWrapper>
                        </Column2>
                    </DiscoverRow>
                </DiscoverWrapper>
            </DiscoverContainer>  
        </>
    )
}

export default Discover
