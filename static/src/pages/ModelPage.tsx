import Navbar from "../components/navbar/Navbar";
import Image_Model from "../assets/Echo_Image.jpeg"
import {CSSProperties, useState} from "react";
import Card from "../components/Card";


function ModelPage(){
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
        backgroundImage: `url(${Image_Model})`,
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

    const apiPredict = "http://127.0.0.1:8000/predict";
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [response, setResponse] = useState<JSON | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleUpload = async() => {
        try {
          const formData = new FormData();
          // @ts-ignore
            formData.append('image', selectedImage, selectedImage.name);

          const response = await fetch(apiPredict, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
              setResponse(await response.json());
          } else {
            console.error('Failed to process image');
          }
        } catch (error) {
          console.error('Error:', error);
        }
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
                                Prediction Model for <br/>  RV failure
                            </h1>
                            <p className="lead" style={textStyles} >
                                Upload the video of echocardiography to get <br/> the prediction Right Ventricular failure <br /> 
                            </p>
                                   
                        </div>
                </div>
               
        </>
    );

}

export default ModelPage;