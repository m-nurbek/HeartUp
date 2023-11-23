import Card from "./Card.tsx";
import React, {useState, useRef} from "react";
import HeartUpLogo from "../assets/HeartUpLogo_final.svg";


function PredictionCar() {
    const predictionCarRef = useRef(null);
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
        height: '100vh',
        width: '200vh',
    };

    // @ts-ignore
    const text = !response ? 'PredictionCar result is here' : response.filename;
    // @ts-ignore
    const title = !response ? 'Make A PredictionCar!' : response.prediction;
    // @ts-ignore
    const img = response ? URL.createObjectURL(selectedImage) : HeartUpLogo;

    return (
            <div ref={predictionCarRef} style={style}>
                <Card title={title} text={text} img={img}>
                    <div className="input-group">
                        <input type="file" onChange={handleFileChange} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                        {selectedImage && <button onClick={handleUpload} className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Upload a file</button>}
                    </div>
                </Card>
            </div>

    );
}

export default PredictionCar;
