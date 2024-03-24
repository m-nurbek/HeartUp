import YoloButton from "./YoloButton.tsx";
import VehiclesButton from "./VehiclesButton.tsx";
import Image_Intro from "/src/HospitalImg.jpg";
import {CSSProperties, RefObject} from "react";
import { Link } from "react-router-dom";

function IntroSection({predictionCarRef} : {predictionCarRef: RefObject<HTMLElement>} ) {
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: 'auto', // Adjust width as needed
    height: '600px', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0px',
  };

  const imageLayerStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '115%',
    backgroundImage: `url(${Image_Intro})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(35%)', // Dimming effect
  };

  const textStyles: CSSProperties = {
    color: 'white', // Text color
      marginLeft: '40px',
      marginRight: '40px',
      marginTop: '40px',
      filter: 'brightness(100%)'
  };

  return (
    <div style={containerStyle}>
      <div style={imageLayerStyle}>

      </div>
        <div style = {textStyles}>
              <h1 className="display-4 fw-bold" style={textStyles}>
                Empower Your Heart <br /> Health with Real-<br />Time Updates
              </h1>
              <p className="lead" style={textStyles} >
                Welcome to our AI platform that provides real-time updates on a <br /> project aiming to enhance early detection of Coronary Artery Disease. <br /> Our user-friendly interactions combine informative content with a <br /> visually appealing and secure design, ensuring you have the tools you <br /> need to prioritize your heart health.
              </p>
              <Link to="/model_page">
                <div style={{textAlign: 'center', transform: 'translateX(-5%)', marginTop: '25px'}}>
                  <VehiclesButton/>
                </div>
              </Link>        
            </div>
    </div>
  );
}

export default IntroSection;
