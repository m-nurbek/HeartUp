import ReactLogo from '../assets/react.svg'
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    title: string;
    text: string;
    img: string | null;
    cardWidth?: number;
}

function Card({children, title, text, img, cardWidth}: Props) {

    return (
        <>
            <div className="card" id = {"card-model"} style={{width: (cardWidth ? cardWidth : 60) + '%'}}>
                <img src={img ? img : ReactLogo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title ? title : "Title"}</h5>
                    <p className="card-text">{text ? text : 'Write something here'}</p>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Card