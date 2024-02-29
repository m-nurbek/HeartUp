import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ModelPage from "./pages/ModelPage.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";

const App: React.FC = () => {

    return (
        <>  
            <Routes>
                <Route path="/HeartUp" element={<HomePage/>} />
                <Route path="/model_page" element={<ModelPage/>} />
                <Route path="/about_us" element={<AboutUs/>} />
                <Route path="/services" element={<ServicesPage/>} />
            </Routes>
        </>
    );
}

export default App;