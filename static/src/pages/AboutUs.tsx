import Navbar from "../components/navbar/Navbar";
import placeholder_image from "../assets/img_placeholder.jpeg"
import background_image from "../assets/nu_kabanbay_img.jpeg"

import {CSSProperties, useState} from "react";
import TeamMember from "../components/TeamMember";

function AboutUs(){
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
        backgroundImage: `url(${background_image})`,
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

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '30px',
        height: '135vh',
        width: '200vh',
    };

    return(
        <>
            <Navbar/>
                <div style={containerStyle}>
                        <div style={imageLayerStyle}>
                        </div>
                        <div style = {textStyles}>
                            <h1 className="display-4 fw-bold" style={textStyles}>
                                About Us 
                            </h1>
                            <p className="lead" style={textStyles} >
                                We are a team of developers and machine learning engineers from Nazarbayev University. <br/> Our goal is to provide a platform that will help in early detection of Coronary Artery Disease. <br/> We are using machine learning algorithms to analyze the data and provide the user with the results. <br/> Our user-friendly interactions combine informative content with a visually appealing and secure design,<br/> ensuring you have the tools you need to prioritize your heart health.
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
                            <TeamMember name="Daniyar Kakimbekov" role="ML Engineer" image={placeholder_image} />
                            <TeamMember name="Madiyar Moldabayev" role="ML Engineer" image={placeholder_image} />
                            <TeamMember name="Nurbek Malikov" role="Back-End Developer" image={placeholder_image} />
                            <TeamMember name="Ardak Atagulov" role="Front-End Developer" image={placeholder_image} />
                        </div>
                        </div>
                        
                </div>
        </>
    );

}

export default AboutUs;