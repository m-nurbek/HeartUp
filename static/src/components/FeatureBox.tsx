import {CSSProperties} from "react";

interface Props {
    heading: string;
    bodyInfo: string;
    alt: string;
    src: string;
}
function FeatureBox({ heading, bodyInfo, src, alt }: Props){

    const containerStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',

  };

    const headingStyle: CSSProperties = {
        alignItems: 'flex-start',
        marginTop: '80px',
        fontSize: '30px',
        verticalAlign: 'top',
        textAlign: 'center',
        flex: '1'
    }

    const mainTextStyle: CSSProperties={
        alignItems: 'flex-start',
        textAlign: 'center',
        fontSize: '14px',
        width: '300px',
        verticalAlign: 'top',
    }

    return(
        <>
            <div style={containerStyle} >
                <img src={src} alt={alt}  style={{height: '50px', width: '50px', marginTop:'200px'}}/>
                  <h1 className="display-3 fw-bold" style={headingStyle}>
                      {heading}
                  </h1>
                  <p className="lead" style={mainTextStyle} >
                      {bodyInfo}
                  </p>
            </div>
        </>
    );
}

export default FeatureBox;