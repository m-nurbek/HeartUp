import React from 'react';
import { Link } from 'react-router-dom';



function VehiclesButton(){

    const scrollToSection = () => {
    // Replace 'your-section-id' with the ID of the section you want to scroll to
    const section = document.getElementById('car_scroll');

    if (section) {
      // Smooth scroll behavior
      section.scrollIntoView({
        behavior: 'smooth',
          block: 'center', // Align to the top of the viewport
        inline: 'nearest',
      });
    }
    };

    return(
        <>
            <button className="btn btn-primary" style={{height: "5em", width: "12em", marginLeft:'80px', marginBottom: '40px'}} type="button">
                <h4>Try Out Our Model!</h4>
                <Link to="/model_page"/>
            </button>
            
        </>
    );
}
export default VehiclesButton;