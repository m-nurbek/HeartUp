import YoloButton from "./YoloButton.tsx";
import VehiclesButton from "./VehiclesButton.tsx";
import Image from "/src/HospitalImg.jpg";
import {CSSProperties, RefObject} from "react";

function IntroSection({predictionCarRef} : {predictionCarRef: RefObject<HTMLElement>} ) {
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%', // Adjust width as needed
    height: '600px', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '20px',
  };

  const imageLayerStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '110%',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(40%)', // Dimming effect
  };

  const textStyles: CSSProperties = {
    color: 'white', // Text color
      marginLeft: '64px',
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
              <YoloButton onClick={() => predictionCarRef.current?.scrollIntoView({ behavior: 'instant' })} />
              <VehiclesButton onClick={() => predictionCarRef.current?.scrollIntoView({ behavior: 'instant' })} />
        </div>
    </div>
  );
}

export default IntroSection;
