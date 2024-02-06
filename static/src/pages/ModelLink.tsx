import { Link } from "react-router-dom";
import VehiclesButton from "../components/VehiclesButton";


function ModelLink(){
    return(
        <Link to="/model_page">
            <VehiclesButton/>
        </Link>
    );
}

export default ModelLink;