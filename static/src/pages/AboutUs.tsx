import Navbar from "../components/navbar/Navbar";
import placeholder_image from "../assets/img_placeholder.jpeg"
import background_image from "../assets/nu_kabanbay_img.jpeg"

import { CSSProperties } from "react";
import TeamMember from "../components/TeamMember";
import Footer from "../components/Footer";

function AboutUs() {
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%', // Adjust width as needed
    height: 'auto', // Adjust height as needed or use auto for dynamic height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '40px',
  };

  const imageLayerStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '99.5%',
    backgroundImage: `url(${background_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(40%)', // Dimming effect
  };

  const textStyles: CSSProperties = {
    color: 'white', // Text color
    marginLeft: '10px',
    filter: 'brightness(100%)'
  };

  const teamMembersContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row', // Initially display team members horizontally
    justifyContent: 'center', // Center-align team members horizontally
    flexWrap: 'wrap', // Allow team members to wrap onto multiple lines
    marginTop: '20px', // Add margin for spacing
  };

  const teamMemberItemStyle: CSSProperties = {
    width: 'calc(50% - 20px)', // Set width to 50% minus margin
    marginBottom: '20px', // Add margin between team members
  };

  // Media query for stacking TeamMember components vertically
  const mediaQueryStyle: CSSProperties = {
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div style={imageLayerStyle}></div>
        <div style={textStyles}>
          <div style={{ marginTop: '40px' }} />
          <h1 className="display-4 fw-bold" style={textStyles}>
            About Us
          </h1>
          <div style={{ marginTop: '40px' }} />
          <p className="lead" style={textStyles}>
            We are a team of developers and machine learning engineers from Nazarbayev University. <br /> Our goal is to provide a platform that will help in early detection of Coronary Artery Disease. <br /> We are using machine learning algorithms to analyze the data and provide the user with the results. <br /> Our user-friendly interactions combine informative content with a visually appealing and secure design,<br /> ensuring you have the tools you need to prioritize your heart health.
          </p>
          <div style={{ marginTop: '100px' }} />
          <div style={{ ...teamMembersContainerStyle, ...mediaQueryStyle }}>
            <TeamMember name="Daniyar Kakimbekov" role="ML Engineer" image={placeholder_image} style={teamMemberItemStyle} />
            <TeamMember name="Madiyar Moldabayev" role="ML Engineer" image={placeholder_image} style={teamMemberItemStyle} />
            <TeamMember name="Nurbek Malikov" role="Back-End Developer" image={placeholder_image} style={teamMemberItemStyle} />
            <TeamMember name="Ardak Atagulov" role="Front-End Developer" image={placeholder_image} style={teamMemberItemStyle} />
          </div>
        </div>
      </div>
      <Footer/>
      
    </>
    
  );
}

export default AboutUs;
