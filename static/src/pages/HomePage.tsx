    import Navbar from "../components/navbar/Navbar.tsx";
    import AlignedPredictions from "../components/AlignedPredictions.tsx";
    import feature_1 from "../assets/settings.png"
    import feature_2 from "../assets/protection.png"
    import feature_3 from "../assets/crosshair.png"

    import IntroSection from "../components/IntroSection.tsx";
    import AlignedFeatures from "../components/AlignedFeatures.tsx";
    import {useRef} from "react";
    import Footer from "../components/Footer.tsx";
import VehiclesButton from "../components/VehiclesButton.tsx";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    const predictionCarRef = useRef<HTMLElement>(null);

    return (
        <>
            <Navbar/>
            <IntroSection predictionCarRef={predictionCarRef}/>
            <AlignedFeatures
                src1={"/src/assets/settings.png"}
                src2={"/src/assets/protection.png"}
                src3={"/src/assets/crosshair.png"}
            />
            <AlignedPredictions/>
            <Footer/>

        </>
    );
}

export default HomePage;