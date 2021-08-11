import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 850px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: fit-content;
        padding: 20px 0 20px;

    }

`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr; 
        justify-content: center;


    }

`

export const ProjectLink = styled.a`
    text-decoration:none;
    color:#010101;

`

export const ProjectsCard = styled.div`
    text-decoration:none;
    background: #8C92AC;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 385px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width:760px){
        
        justify-content: center;
        height:fit-content;
        width: 80%;
        margin: 0 10% 0 10%;
    }
`

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`

export const ProjectsH1= styled.h1`
    margin-top:0;
    font-size: 2.5rem;
    color: #010101;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }

`
export const ProjectsH2= styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectsP= styled.p`
    font-size: .9rem;
    text-align: center;

    @media screen and (max-width:610px){
        font-size: .8rem;
    }

`
