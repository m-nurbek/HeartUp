import React from 'react';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function YoloButton({onClick} : ButtonProps){

    const scrollToSection = () => {
    // Replace 'your-section-id' with the ID of the section you want to scroll to
    const section = document.getElementById('yolo_scroll');

    if (section) {
      // Smooth scroll behavior
      section.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
          block: 'center'
      });
    }
  };

    return(
        <>
            <button onClick={scrollToSection} className="btn btn-primary" style={{marginLeft:'80px', marginBottom: '40px'}} type="button">
                Try out Yolo prediction
            </button>
        </>
    );
}

export default YoloButton;