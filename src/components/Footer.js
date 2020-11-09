import React from 'react';
import Logo from './Logo.png';
import { NavbarBrand, NavItem, Nav, NavLink, Button } from "reactstrap";
import 'font-awesome/css/font-awesome.min.css';
import { useMediaQuery } from 'react-responsive'


const Footer = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  return (
    <div >
      <Mobile>
        <footer className="footer text-center text-light container-fluid " style={{ marginTop: '-10rem' }}>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><h1>FUTURE - PROOF YOUR ORGANIZATION</h1>
          <p >Find out how to unlock progress in your buisness. Understand your current state, identify<br />
          opportunity areas and prepare to take of your organization's future.</p>
          <Button href="https://brainsterquiz.typeform.com/to/kC2I9E" id="cen" className="btn  center-block bg-warning"><b>Тake the Assessment</b></Button>
          <br />
          <hr />
          <Nav >
          <NavItem className="offset-2">
             <NavLink href="https://www.linkedin.com/school/brainster-co/"><i className="fa fa-linkedin  text-warning ml-5 " /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/BrainsterCo"  > <i className="fa fa-twitter px-3 text-warning " /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.facebook.com/brainster.co" ><i className=" fa fa-facebook  text-warning " /></NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/about" className="nav-link  text-light ml-5">About us</NavLink>
            </NavItem>
            <NavLink className="nav-link px-2 text-light" href="/contact" >Contact</NavLink>
            <NavItem>
              <NavLink className="nav-link  text-light " href="https://www.facebook.com/pg/brainster.co/photos/" >Galery</NavLink>
            </NavItem>
            <NavbarBrand className="px-5 offset-2">
              < img className="img justify-content-center  " alt="im" src={Logo} style={{ width: "140px", height: '40px' }} />
            </NavbarBrand>
          </Nav>
          <br />
        </footer>
      </Mobile>

      <Desktop>
        <footer className="   text-center text-light container-fluid " style={{ marginTop: '-30rem' }} >
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <h1>FUTURE - PROOF YOUR ORGANIZATION</h1>
          <p >Find out how to unlock progress in your buisness. Understand your current state, identify<br />
          opportunity areas and prepare to take of your organization's future.</p>
          <Button href="https://brainsterquiz.typeform.com/to/kC2I9E" id="cen" className="btn  center-block bg-warning"><b>Тake the Assessment</b></Button>
          <br /><br /><br />
          <hr />
          <Nav >
            <NavItem >
              <NavLink href="/about" className="nav-link  text-light ml-5">About us</NavLink>
            </NavItem>
            <NavLink className="nav-link px-2 text-light" href="/contact" >Contact</NavLink>
            <NavItem>
              <NavLink className="nav-link  text-light " href="https://www.facebook.com/pg/brainster.co/photos/" >Galery</NavLink>
            </NavItem>
            <NavbarBrand className="px-5 offset-2">
              < img className="img justify-content-center  " alt="im" src={Logo} style={{ width: "140px", height: '40px' }} />
            </NavbarBrand>
            <NavItem className="offset-2">
              <NavLink href="https://www.linkedin.com/school/brainster-co/"><i className="fa fa-linkedin  text-warning ml-5 " /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/BrainsterCo"  > <i className="fa fa-twitter px-3 text-warning " /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.facebook.com/brainster.co" ><i className=" fa fa-facebook  text-warning " /></NavLink>
            </NavItem>
          </Nav>
          <br />
        </footer>
      </Desktop>
      
    </div>
  );
}
export default Footer;




