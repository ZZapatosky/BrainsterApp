import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Navbar, NavbarBrand } from "reactstrap";
import Logo from './Logo.png';
import { useMediaQuery } from 'react-responsive'


const NavBar = () => {
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null  
  }
  return (
    <div className="sticky-top    ">
      <Mobile>
        <Navbar className=" container-fluid   " >
          <Menu >
            <Link to="/landingPage" >
              <img src={Logo} id="menuImg" alt="nice " style={{ width: "140px", height: '40px', marginTop: "-30px" }} />
            </Link><hr />
            <br /><br /><br /><br />
            <Link to="/reg" className="menu-item bg-warning" style={{ color: 'gold' }}>
              <b>Регистрирај се</b>
            </Link><hr />
            <Link className="menu-item" to="/reg" style={{ color: 'gold' }} >
              <b>Најави се</b>
            </Link><hr />
            <Link className="menu-item" to="/#">
              <b>За нас</b>
            </Link><hr />
            <Link className="menu-item" to="/#">
              <b>Галерија</b>
            </Link><hr />
            <Link className="menu-item" to="Contact">
              <b>Контакт</b>
            </Link><hr />
          </Menu><p className="menu-text text-warning pull-left offset-2" style={{ marginTop: "-7rem", marginRight: "12rem" }}>Мени</p>
          <NavbarBrand className="offset-4" href="/#" >
            <img className="img justify-content-center" alt="im" src={Logo} style={{ width: "140px", height: '40px', marginTop: "-160px", marginRight: "5rem" }} />
          </NavbarBrand>
          <ButtonGroup style={{ marginTop: "-rem", }}>
            <Button className="btn-warning text-light  " size="sm" href="https://www.brainster.io">Обуки за компании</Button>
            <Button className=" ml-2   btn-dark text-warning  " size="sm" href="https://www.brainster.io">Вработи наши студенти</Button>
          </ButtonGroup>
        </Navbar>
      </Mobile>

      <Desktop>
        <Navbar className=" container-fluid   " >
          <Menu  >
            <Link to="/landingPage" >
              <img src={Logo} id="menuImg" alt="nice " style={{ width: "140px", height: '40px', marginTop: "-35px" }} />
            </Link><hr />
            <br /><br /><br /><br />
            <Link to="/reg" className="menu-item" style={{ color: 'gold' }}>
              <b>Регистрирај се</b>
            </Link><hr />
            <Link className="menu-item" to="/reg" style={{ color: 'gold' }} >
              <b>Најави се</b>
            </Link><hr />
            <Link className="menu-item" to="/#">
              <b>За нас</b>
            </Link><hr />
            <Link className="menu-item" to="/#">
              <b>Галерија</b>
            </Link><hr />
            <Link className="menu-item" to="Contact">
              <b>Контакт</b>
            </Link><hr />
          </Menu><p className="menu-text text-warning" style={{ marginTop: "-2rem", marginLeft: "-19rem" }}>Мени</p>
          <NavbarBrand className="offset-2" href="/#" >
            <img className="img justify-content-center" alt="im" src={Logo} style={{ width: "140px", height: '40px', marginTop: "-35px" }} />
          </NavbarBrand>
          <ButtonGroup className=" mb-4 ">
            <Button className="btn-warning text-light " size="sm" href="https://www.brainster.io">Обуки за компании</Button>
            <Button className=" ml-2   btn-dark text-warning  " size="sm" href="https://www.brainster.io">Вработи наши студенти</Button>
          </ButtonGroup>
        </Navbar>
      </Desktop>
    </div>
  );
};

export default NavBar;

