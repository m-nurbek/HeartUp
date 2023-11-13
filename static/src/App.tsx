import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import PredictionCar from "./components/PredictionCar.tsx";
import PredictionYolo from "./components/PredictionYolo.tsx";

function App() {


    return (
        <>
            <Navbar></Navbar>
            <Main></Main>
            <PredictionCar></PredictionCar>
            <PredictionYolo></PredictionYolo>
        </>
    );
}

export default App;