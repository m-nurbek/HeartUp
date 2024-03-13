import Navbar from "../components/navbar/Navbar";
import Image_Model from "../assets/Echo_Image.jpeg";
import { CSSProperties, useState } from "react";
import Card from "../components/Card";

function ModelPage() {
    const containerStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const whiteContainerStyle: CSSProperties = {
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '50%', // Adjust width as needed
        textAlign: 'center',
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
        borderRadius: '10px', // Match the container's border-radius
        zIndex: -1, // Place the image behind the container
    };

    const textStyles: CSSProperties = {
        color: 'black',
        marginLeft: '0',
        marginTop: '0',
    };

    const apiPredict = "http://127.0.0.1:8000/predict";
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [response, setResponse] = useState<JSON | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        try {
            if (!selectedFile) {
                console.error('No file selected');
                return;
            }

            const formData = new FormData();
            formData.append('image', selectedFile, selectedFile.name);

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

    return (
        <>
            <Navbar />
            <div style={containerStyle}>
                <div style={imageLayerStyle}></div>
                <div style={whiteContainerStyle}>
                    <div style={textStyles}>
                        <h1 className="display-4 fw-bold" style={textStyles}>
                            Prediction Model for <br /> RV failure
                        </h1>
                        <p className="lead" style={textStyles}>
                            Upload the video of echocardiography to get <br /> the prediction Right Ventricular failure <br />
                        </p>
                        {/* File input */}
                        <input type="file" onChange={handleFileChange} />
                        {/* Button to submit the file */}
                        <button onClick={handleUpload}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModelPage;
