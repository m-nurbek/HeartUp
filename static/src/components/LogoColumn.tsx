
function LogoColumn() {
  const footerContainer = {
    display: 'flex',
    justifyContent: 'center',
      marginRight: '150px'
  };

  const newsLetterContainer = {
    padding: '20px',
    marginLeft: '150px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '32px',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={footerContainer}>
      <div style={newsLetterContainer}>
        <div style={columnStyle}>
          <h2>Newsletter</h2>
          <p className="text-black" style={{ width: '300px' }}>
            Subscribe to our newsletter for the latest updates on features and releases.
          </p>

          <div className="mb-3" style={{ width: '400px' }}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" style={{ marginBottom: '20px' }} />
            <button className="btn btn-primary" type="submit" style={{ width: '400px' }}>
              Subscribe
            </button>
          </div>
          <p className="text-black" style={{ width: '400px', fontSize: '12px' }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>

      <div style={newsLetterContainer}>
        <div style={columnStyle}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>Column One</h2>
          <p className="text-black" style={{ width: '100px' }}>
            Link one
          </p>
          <p className="text-black" style={{ width: '100px' }}>
            Link two
          </p>
          <p className="text-black" style={{ width: '100px' }}>
            Link three
          </p>
          <p className="text-black" style={{ width: '100px' }}>
            Link four
          </p>
        </div>
      </div>

      <div style={newsLetterContainer}>
        <div style={columnStyle}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', width: '100px', marginLeft: '30px' }}>Follow us</h2>
          <div style={columnStyle}>
            <img src={"/src/assets/instagramlogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', marginBottom: '20px'}} />
            <img src={"/src/assets/Xlogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', filter: 'brightness(20%)', marginBottom: '20px'}} />
            <img src={"/src/assets/linkedinlogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', marginBottom: '20px' }} />
            <img src={"/src/assets/youtubelogo.png"} alt={"Instagram logo"} style={{ height: '40px', width: '40px', marginBottom: '20px', }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoColumn;
