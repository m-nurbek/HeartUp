import React from 'react';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function YoloButton({onClick} : ButtonProps){
    return(
        <>
            <button className="btn btn-primary" style={{marginLeft:'80px', marginBottom: '40px'}} type="button"
                   onClick={onClick}>
                Try out Yolo prediction
            </button>
        </>
    );
}

export default YoloButton;