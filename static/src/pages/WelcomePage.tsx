    import Navbar from "../components/navbar/Navbar.tsx";
    import WelcomeText from "../components/WelcomeText.tsx";
    import WelcomeNavButtons from "../components/WelcomeNavButtons.tsx";


function WelcomePage(){
    return(
        <>
                <WelcomeNavButtons></WelcomeNavButtons>
                <Navbar></Navbar>
                <WelcomeNavButtons></WelcomeNavButtons>
                <WelcomeText text={"hey"}/>

         </>
    );
}

export default WelcomePage;