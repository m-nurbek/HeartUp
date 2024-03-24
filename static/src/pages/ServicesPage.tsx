import Navbar from "../components/navbar/Navbar";
import background_image from "../assets/servers_img.jpeg"

import { CSSProperties } from "react";
import TeamMember from "../components/TeamMember";
import AlignedFeatures from "../components/AlignedFeatures";
import Footer from "../components/Footer";

function ServicesPage() {
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%', // Adjust width as needed
    height: 'auto', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  };

  const imageLayerStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '107%',
    backgroundImage: `url(${background_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(40%)', // Dimming effect
  };

  const textStyles: CSSProperties = {
    color: 'white', // Text color
    marginLeft: '60px',
    marginRight: '100px',
    filter: 'brightness(100%)'
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div style={imageLayerStyle}></div>
        
        <div style={{marginTop: '80px'}}/>
        <h1 className="display-4 fw-bold" style={textStyles}>
            Our Services
          </h1>
          <div style={{ marginTop: '40px' }} />
          <p className="lead" style={textStyles}>
            We provide a platform that will help in early detection of Coronary Artery Disease.
            <br /> We are using machine learning algorithms to analyze the data and provide the user with the results.
            <br /> Our user-friendly interactions combine informative content with a visually appealing and secure design,
            <br /> ensuring you have the tools you need to prioritize your heart health.
          </p>
            <div style={{ marginTop: '-100px' }} />
        <div style={textStyles}>

        <div style={{marginLeft: '-20px'}}>
          <AlignedFeatures
            src1={"/src/assets/prediction.png"}
            src2={"/src/assets/management.png"}
            src3={"/src/assets/analysis.png"}
            heading1={"Reliable prediction of the LVAD Failure"}
            heading2={"Ready to use Hospital Management Tools"}
            heading3={"Storage of medical analyses and data"}
            text1={"High-accuracy prediction of the LVAD failure with the help of the machine learning algorithms"}
            text2={"Wide range of tools for the hospital management, including the patient management, staff management, and the hospital resources management"}
            text3={"Reliable storage of the medical analyses and data, including the patient data, medical images, and the medical analyses results"}
          />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ServicesPage;
