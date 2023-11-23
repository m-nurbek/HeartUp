

function LogoColumn(){

    const newsLetterContainer = {
        padding: '20px',
        marginLeft: '64px',
        display: 'flex',
        marginBottom: '32px',
        width: '200px',
    };

    const columnStyle = {
        display: 'flex',
        flexDirection:'column'
    };

    const gapStyle={
        marginLeft:'150px',
        gap: '300px',
        display: 'flex',
    }

    return(
            <div style={newsLetterContainer} >
                <div style={columnStyle}>
                    <h2>Newsletter</h2>
                    <p className="text-black" style={{width: '300px'}}>
                        Subscribe to our newsletter for the latest updates on features and releases.
                    </p>

                    <div className="mb-3" style={{width: '400px'}}>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" width={'10px'} style={{marginBottom: '20px'}}/>
                              <button className="btn btn-primary" type="submit" style={{width: '400px'}}>Subscribe</button>

                    </div>
                    <p className="text-black" style={{width: '400px', fontSize: '12px'}}>
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                </div>

                <div style={gapStyle}>
                        <div style={columnStyle}>
                            <h2 style={{fontSize: '16px', fontStyle: 'bold', marginBottom: '20px'}}>
                                Column One
                            </h2>
                            <p className="text-black" style={{width: '100px'}}>
                                Link one
                            </p>
                            <p className="text-black" style={{width: '100px'}}>
                                Link two
                            </p>
                            <p className="text-black" style={{width: '100px'}}>
                                Link three
                            </p>
                            <p className="text-black" style={{width: '100px'}}>
                                Link four
                            </p>
                        </div>

                        <div style={columnStyle}>
                            <h2 style={{fontSize: '16px', fontStyle: 'bold', marginBottom: '20px', width: '100px'}}>
                                Follow us
                            </h2>
                            <div style={columnStyle}>
                                <img src={"/src/assets/instagramlogo.png"} alt={"Instagram logo"}  style={{height: '40px', width: '40px',marginBottom: '15px', marginLeft: '10px'}}/>
                                <img src={"/src/assets/Xlogo.png"} alt={"Instagram logo"}  style={{height: '40px', width: '40px', filter: 'brightness(20%)', marginBottom: '15px', marginLeft: '10px'}}/>
                                <img src={"/src/assets/linkedinlogo.png"} alt={"Instagram logo"}  style={{height: '40px', width: '40px', marginBottom: '15px', marginLeft: '10px'}}/>
                                <img src={"/src/assets/youtubelogo.png"} alt={"Instagram logo"}  style={{height: '40px', width: '40px', marginBottom: '15px', marginLeft: '10px'}}/>
                            </div>
                        </div>
                    </div>
            </div>
    );
}

export default LogoColumn;