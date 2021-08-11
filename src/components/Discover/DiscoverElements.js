import styled from 'styled-components'

export const DiscoverContainer = styled.div`
    color:#fff;
    background: #010606;

    @media screen and (max-width: 1100px) {
        padding: 100px 0;
        height: fit-content;
    }

`

export const DiscoverWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 12px;
    justify-content: center;

`

export const DiscoverRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    

    @media screen and (max-width:768px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const TextWrapper = styled.div`
    display: flex;
    
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 0px;


`

export const DiscoverHeader = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    padding-top: 60px;
    padding-bottom:0px;
    margin-bottom: 0;
    @media screen and (max-width:1100px){
        font-size: 7.5vw;
    }
    
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    height:100%;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    max-height: 800px;
    height: fit-content;
`

export const Img = styled.img`
    width: 400px;
    margin: 0 0 10px 0;
    padding-right: 0;
    height: 800px;


    @media screen and (max-width:1100px){
        height: 200px;
        width: 100%;
    }
`

export const ImgSM = styled.img`
    height: 500px;
    width: auto;
    margin: 0 0 10px 0;
    padding-right: 0;
    align-items: left;


    @media screen and (max-width:800px){
        height: 250px;
    }
`

export const InfoWrapper = styled.div`
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    align-items:flex-start;
`

export const InfoText = styled.h2`
    padding-top:15px;
    
    font-size: 20px;
    justify-content: auto;
    color:#fff;

    @media screen and (max-width:700px){
        font-size: 12px;
    }

`

export const DownloadLink = styled.a`
    
`   