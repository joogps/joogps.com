import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './sketch.js';
import image from './ContentSection.png';
import hero from './Magic-hero.png';
import ContentSection from './ContentSection';
import Trackpad from './Trackpad.png';
import AppStoreButton from '../../components/AppStoreButton/index.js';
import "@fontsource/space-grotesk/700.css";

function Magic() {
    let centerDivStyle = {
        textAlign: "center",
        userSelect: "none",
        padding: "64px",
        marginTop: "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    let titleStyle = {
        textAlign: "center",
        fontSize: "2.5em",
        color: "black",
        userSelect: "none",
        lineHeight: "1.0em",
    };

    let spaceGrotesk = {
        color: "#7D28DF",
        fontFamily: "Space Grotesk",
    };

    let heroStyle = {
        verticalAlign: "middle",
        width: "50%",
        margin: "42px",
        padding: "0",
        userSelect: "none",
    };
    
    let featureSet = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "32px",
        margin: "32px",
        borderRadius: "10px",
        userSelect: "none",
        backgroundColor: "#FAFAFA",
        backgroundImage: "radial-gradient(#DADADA 1px, transparent 0)",
        backgroundSize: "10px 10px",
        backgroundPosition: "-19px -19px",
    }

    return (
        <div>
        <ReactP5Wrapper sketch={sketch} />
        
        <div style={centerDivStyle}>
            <h3 style={titleStyle}>
            <span style={spaceGrotesk}>Magic</span>  is the drawing app <br></br>made for the Mac, and for the fun.
            </h3>
            <img src={hero} alt="Magic" style={heroStyle} />
            <AppStoreButton link="https://apps.apple.com/us/app/magic-drawing-and-ai/id1581223559?mt=12&amp;itsct=apps_box_badge&amp;itscg=30200" />
        <p>
        </p>
        </div>
        
        <div style={featureSet}>
        <ContentSection imageSrc={Trackpad} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ContentSection imageSrc={image} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ContentSection imageSrc={image} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ContentSection imageSrc={image} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ContentSection imageSrc={image} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ContentSection imageSrc={image} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
        </div>
    );
}

export default Magic;