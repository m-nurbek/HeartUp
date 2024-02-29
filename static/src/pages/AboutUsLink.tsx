import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";


function AboutUsLink(){
    return(
        <Link to="/about_us">
            <AboutUs/>
        </Link>
    );
}

export default AboutUsLink;