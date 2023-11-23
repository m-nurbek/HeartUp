import LogoColumn from "./LogoColumn.tsx";


function Footer(){

    const containerStyle = {
        border: '2px solid black',
        padding: '20px',
        marginLeft: '64px',
        marginBottom: '32px',
        width: '1300px'

    };

    return (
        <div style={containerStyle}>
            <LogoColumn />
        </div>
    );
}

export default Footer;