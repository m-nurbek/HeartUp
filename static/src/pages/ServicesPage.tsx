import Navbar from "../components/navbar/Navbar";
import background_image from "../assets/servers_img.jpeg"

import {CSSProperties, useState} from "react";
import TeamMember from "../components/TeamMember";
import AlignedFeatures from "../components/AlignedFeatures";

function ServicesPage(){
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
        height: '150%',
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
                                Our Services
                            </h1>
                            <p className="lead" style={textStyles} >
                                We provide a platform that will help in early detection of Coronary Artery Disease. <br/> We are using machine learning algorithms to analyze the data and provide the user with the results. <br/> Our user-friendly interactions combine informative content with a visually appealing and secure design,<br/> ensuring you have the tools you need to prioritize your heart health.
                            </p>
                            <AlignedFeatures
                                src1={"/src/assets/settings_white.png"}
                                src2={"/src/assets/shield_white.png"}
                                src3={"/src/assets/crosshair_white.png"}
                            />
                            
                            
                        </div>
                        
                        
                </div>
                
        </>
    );

}

export default ServicesPage;