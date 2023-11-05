import Card from "./components/Card.tsx";
import {useState} from "react";
import axios, {AxiosResponse} from "axios";


function App() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [response, setResponse] = useState<AxiosResponse | null>(null)
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
            const apiUrl = 'http://127.0.0.1:8000/predict'

            axios.post(apiUrl, formData)
                .then((res) => {
                    console.log(res);
                    setResponse(res);
                })
                .catch((err) => {
                    console.log('ERROR:', err);
                })
        }
    };

    const text = response ? response.data['filename'] : 'Prediction result is here'
    const title = response ? response.data['prediction'] : 'Make A Prediction!'
    // @ts-ignore
    const img = response ? URL.createObjectURL(selectedImage) : null
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