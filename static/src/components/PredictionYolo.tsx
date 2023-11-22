import React, {useState} from "react";
import HeartUpLogo from "../assets/HeartUpLogo_final.svg";
import Card from "./Card.tsx";


function PredictionYolo(){
    const apiPredict = "http://127.0.0.1:8000/predict/yolo8";
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [response, setResponse] = useState<string | null>(null);
    const handleFileChangeYolo = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleUploadYolo = async() => {
        try {
          const formData = new FormData();
          // @ts-ignore
            formData.append('image', selectedImage, selectedImage.name);

          const response = await fetch(apiPredict, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setResponse(imageUrl);
          } else {
            console.error('Failed to predict with YOLOv8');
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '30px',
        height: '100vh',
        width: '200vh',
    };

    // @ts-ignore
    const img = response ? response : HeartUpLogo;

    return (
        <>
        <div style={style}>
            <Card title={"Yolo prediction"} text={"Upload an image and click the button"} img={img}>
                <div className="input-group">
                    <input type="file" onChange={handleFileChangeYolo} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                    {selectedImage && <button onClick={handleUploadYolo} className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Upload a file</button>}
                </div>
            </Card>
        </div>
        </>
    );
}

export default PredictionYolo;