import React from 'react';

function LogoColumn() {
  const footerContainer = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto', // Center align the container
    maxWidth: 'auto',
    marginRight: '60px',
    marginLeft: '60px',
    flexWrap: 'wrap', // Allow items to wrap onto multiple lines
  };

  const newsLetterContainer = {
    padding: '20px',
    flex: '1', // Take up equal space in the container
    minWidth: '300px', // Minimum width for responsiveness
    marginBottom: '5px',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div style={footerContainer}>
      <div style={newsLetterContainer}>
        <div style={columnStyle}>
          <h2>Newsletter</h2>
          <p className="text-black" style={{ width: '100%', maxWidth: '300px', marginBottom: '10px' }}>
            Subscribe to our newsletter for the latest updates on features and releases.
          </p>

          <div className="mb-3" style={{ width: '100%', maxWidth: '400px' }}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" style={{ marginBottom: '15px', width: '100%' }} />
            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
              Subscribe
            </button>
          </div>
          <p className="text-black" style={{ width: '100%', maxWidth: '400px', fontSize: '12px' }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>

      <div style={newsLetterContainer}>
        <div style={columnStyle}>
          <h2 style={{fontWeight: 'normal'}}>Useful links</h2>
          <p className="text-black" style={{ width: '100%', maxWidth: '100px', marginBottom: '10px' }}>
            Link one
          </p>
          <p className="text-black" style={{ width: '100%', maxWidth: '100px', marginBottom: '10px' }}>
            Link two
          </p>
          <p className="text-black" style={{ width: '100%', maxWidth: '100px', marginBottom: '10px' }}>
            Link three
          </p>
          <p className="text-black" style={{ width: '100%', maxWidth: '100px', marginBottom: '10px' }}>
            Link four
          </p>
        </div>
      </div>

      <div style={newsLetterContainer}>
        <div style={columnStyle}>
          <h2 style={{fontWeight: 'normal'}}>Follow us</h2>
            <img src={"/src/assets/instagramlogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', marginRight: '10px', marginTop: '15px'}} />
            <img src={"/src/assets/Xlogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', filter: 'brightness(20%)', marginRight: '10px', marginTop: '15px' }} />
            <img src={"/src/assets/linkedinlogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', marginRight: '10px', marginTop: '15px' }} />
            <img src={"/src/assets/youtubelogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', marginRight: '10px', marginTop: '15px'}} />
        </div>
      </div>
    </div>
  );
}

export default LogoColumn;
