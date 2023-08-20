import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './sketch';
import logo from './logo.svg';

function Magic() {
    let centerDivStyle = {
        textAlign: "center",
        margin: "0",
        padding: "0",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        userSelect: "none"
    };

    let titleStyle = {
        textAlign: "center",
        fontSize: "2.5em",
        color: "black",
        userSelect: "none"
    };

    let logoStyle = {
        verticalAlign: "middle",
        height: "1.25em",
        width: "1.25em",
        margin: "12px",
        padding: "0",
        fill: "purple",
        userSelect: "none",
    };

    let linkStyle = {
        color: "#7D28DF",
        textDecoration: "underline",
        userSelect: "none",
    }

    return (
        <div>
        <ReactP5Wrapper sketch={sketch} />

        <div style={centerDivStyle}>
        <h3 style={titleStyle}> 
        <img src={logo} style={logoStyle}/>
        Coming soon
        </h3>
        <p>
        <a href="" style={linkStyle}> More info </a>
        </p>
        </div>

        </div>
    );
}

export default Magic;