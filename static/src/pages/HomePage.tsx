    import Navbar from "../components/navbar/Navbar.tsx";

    import AlignedPredictions from "../components/AlignedPredictions.tsx";
    import IntroSection from "../components/IntroSection.tsx";
    import AlignedFeatures from "../components/AlignedFeatures.tsx";
    import {useRef} from "react";
    import Footer from "../components/Footer.tsx";

function HomePage() {
    const predictionCarRef = useRef<HTMLElement>(null);

    return (
        <>
            <Navbar/>
            <IntroSection predictionCarRef={predictionCarRef}/>
            <AlignedFeatures/>
            <AlignedPredictions/>
            <Footer/>
        </>
    );
}

export default HomePage;