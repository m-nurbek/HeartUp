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
            <button className="btn btn-primary" style={{marginLeft:'80px', marginBottom: '40px'}} type="button">
                Try Out Our Model!
                <Link to="/model_page"/>
            </button>
            
        </>
    );
}
export default VehiclesButton;