import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ModelPage from "./pages/ModelPage.tsx";

const App: React.FC = () => {

    return (
        <>  
            <Routes>
                <Route path="/HeartUp" element={<HomePage/>} />
                <Route path="/model_page" element={<ModelPage/>} />
            </Routes>
        </>
    );
}

export default App;