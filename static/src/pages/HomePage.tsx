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
                heading1={"How out platform works"}
                heading2={"Secure and Reliable Data Analysis"}
                heading3={"Enhanced Early Detection of Coronary Artery Disease"}
                text1={"Our AI platform uses advanced algorithms to analyze medical data and provide real-time updates on the progress of the project. It combines user-friendly interactions with informative content, ensuring a seamless experience for our users."}
                text2={"Our platform employs state-of-the-art security measures to ensure the confidentiality and integrity of the medical data. With our reliable data analysis, users can trust the accuracy of the results."}
                text3={"Our platform aims to revolutionize the early detection of Coronary Artery Disease by leveraging AI technology. By providing real-time updates and analysis, we enable healthcare professionals to identify potential risks and intervene earlier."}
                />
            <AlignedPredictions/>
            <Footer/>

        </>
    );
}

export default HomePage;