import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import PredictionCar from "./components/PredictionCar.tsx";
import PredictionYolo from "./components/PredictionYolo.tsx";
import WelcomeText from "./components/WelcomeText.tsx";

function App() {


    return (
        <>
            <WelcomeText text={"alo blyad"}/>
            <Navbar></Navbar>
            <Main></Main>
            <PredictionCar></PredictionCar>
            <PredictionYolo></PredictionYolo>
        </>
    );
}

export default App;