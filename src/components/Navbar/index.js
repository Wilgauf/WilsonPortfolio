import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img } from './NavbarElements';

import logo from '../../images/WilsonLogo.png'


const Navbar = ({toggleOpen}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }
    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])
    //Smooth scroll to top for Logo 
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick= {toggleHome}>
                            <Img src={logo} alt='NOSLIW'/>
                    </NavLogo>
                    <MobileIcon onClick={toggleOpen}>
                        <FaBars />   
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar
