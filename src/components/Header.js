import React from 'react';
import { Button } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

const Header = () => {
  return (
    <div>
      <Mobile>
    <header className="container-fluid text-center" style={{ color: 'white',marginTop:"-24rem" }}>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <p  >Изработено од студенти на академијата на  <a  href="/#" style={{ color: 'gold' }}>Brainster</a></p>
      <br /> <h1>FUTURE - PROOF YOUR ORGANIZATION</h1>
      <h6 className="text-center">Find out how to unlock progress in your buisness. Understand your current state, identify<br />
        opportunity areas and prepare to take of your organization's future.
      </h6>
      <br />
      <Button href="https://brainsterquiz.typeform.com/to/kC2I9E" className="btn  center-block bg-warning"><b>Тake the Assessment</b></Button>
    </header>
</Mobile>


<Desktop>
<header className="container-fluid text-center" style={{ color: 'white',marginTop:"-15rem" }}>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <p  >Изработено од студенти на академијата на  <a  href="/#" style={{ color: 'gold' }}>Brainster</a></p>
      <br /><br /><br /><br />  <h1>FUTURE - PROOF YOUR ORGANIZATION</h1>
      <h6 className="text-center">Find out how to unlock progress in your buisness. Understand your current state, identify<br />
        opportunity areas and prepare to take of your organization's future.
      </h6>
      <br />
      <Button href="https://brainsterquiz.typeform.com/to/kC2I9E" className="btn  center-block bg-warning"><b>Тake the Assessment</b></Button>
    </header>
</Desktop>
</div>
  );
}
export default Header;