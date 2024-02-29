import { Link } from "react-router-dom";


function ServicesPageLink(){
    return(
        <Link to="/services">
            <ServicesPage/>
        </Link>
    );
}

export default ServicesPageLink;