import styles from "./styles.module.css"
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    type: "primary" | "secondary";
}
function NavbarButton({children, type}: Props){
    let selector = styles.style_secondary;
    if (type === "primary"){
        selector = styles.style_primary;
    }

    return (
        <>
            <div className={selector}>
                <div className={styles.button}>{children}</div>
            </div>
        </>
    );
}

export default NavbarButton;