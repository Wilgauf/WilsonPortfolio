import React, {useState} from 'react'
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterALink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
import Modal from '../Modal/Modal'

const Footer = () => {
    const [showModal, setShowModal] = useState(false)
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    const openModal = () =>{
        setShowModal(prev => !prev)
        console.log('changing modal state')
        console.log(showModal)
    }

    return (
        <FooterContainer>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Useful Links</FooterLinkTitle>
                                <FooterLink to="/">About me</FooterLink>
                                <FooterLink to="/">Projects</FooterLink>
                                <FooterLink to="/">History</FooterLink>
                                <FooterLink to="/">Another one</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterALink href="https://www.instagram.com/">Instagram</FooterALink>
                                <FooterALink href="https://www.facebook.com/">Facebook</FooterALink>
                                <FooterALink href="https://twitter.com/Wilsonlikethev1">Twitter</FooterALink>
                                <FooterALink href="https://www.youtube.com/channel/UCYl21uALabwwTHiI6GubUSA">Youtube</FooterALink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Me</FooterLinkTitle>
                                <FooterLink onClick={openModal}>Contact</FooterLink>
                                <FooterLink onClick={openModal}>Report a bug</FooterLink>
                                <FooterLink onClick={openModal}>Careers</FooterLink> 
                                <FooterLink onClick={openModal}>The team</FooterLink>
                            
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            NOSLIW
                        </SocialLogo>
                        <WebsiteRights> Nosliw Copyright {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UCYl21uALabwwTHiI6GubUSA" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="//twitter.com/Wilsonlikethev1" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/wilson-gauf/" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
