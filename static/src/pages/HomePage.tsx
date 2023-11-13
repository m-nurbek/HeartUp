import Navbar from "../components/navbar/Navbar.tsx";
import PredictionCar from "../components/PredictionCar.tsx";
import PredictionYolo from "../components/PredictionYolo.tsx";

function HomePage() {

    return (
        <>
            <Navbar></Navbar>
            <PredictionCar></PredictionCar>
            <PredictionYolo></PredictionYolo>
        </>
    );
}

export default HomePage;