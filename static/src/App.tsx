import Card from "./components/Card.tsx";
import React, {useState} from "react";
import axios, {AxiosResponse} from "axios";
import HeartUpLogo from './assets/HeartUpLogo_final.svg';

function App() {
    const apiPredict = "https://heartup-ahhs8sj7.b4a.run/predict";
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [response, setResponse] = useState<AxiosResponse | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleUpload = async() => {
        if (selectedImage) {
            console.log("Uploading image...");
            console.log(selectedImage)
            const formData = new FormData();
            formData.append('image', selectedImage, selectedImage.name);

            axios.post(apiPredict, formData)
                .then((res) => {
                    console.log(res);
                    setResponse(res);
                })
                .catch((err) => {
                    console.log('ERROR:', err);
                })
        }
    };

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const text = response ? response.data['filename'] : 'Prediction result is here';
    const title = response ? response.data['prediction'] : 'Make A Prediction!';
    // @ts-ignore
    const img = response ? URL.createObjectURL(selectedImage) : HeartUpLogo;


    return (
        <div style={style}>
            <Card title={title} text={text} img={img}>
                <div className="input-group">
                    <input type="file" onChange={handleFileChange} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                    {selectedImage && <button onClick={handleUpload} className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Upload a file</button>}
                </div>
            </Card>
        </div>
    );
}

export default App;