import { Button, Nav, Navbar } from 'react-bootstrap';
import { useTheme } from '../Context/ThemeContext';
//import style from './style';

 const TopNavbar = () => {
   const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme}>
      <div className=" d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <svg xmlns="http://www.w3.org/2000/svg" width="130" height="102.14" viewBox="0 0 241 102.14">
            <g id="logo" transform="translate(-632 -392)">
              <text transform="translate(650 405)" fill="#8a2be2" 
              font-size="69" font-family="Poppins" font-weight="500" letter-spacing="-0.00041em">
                <tspan x="0" y="0">
                  React 
                </tspan>
              </text>
            </g>
          </svg>
     
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/features">About</Nav.Link>
          <Nav.Link href="/pricing">Contact</Nav.Link>
        </Nav>
          <Nav className="justify-content-end">
            <Nav.Link className="me-auto" onClick={toggleTheme} >
            <center>
              <Button className='btn btn-light'
              variant="outline-primary" >Dark/Light</Button>
             </center>
            </Nav.Link>
          </Nav>
        
      </div>
    </Navbar>
  );
};

export default TopNavbar;