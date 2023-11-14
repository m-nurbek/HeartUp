import styles from "./styles.module.css"
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    type: "primary" | "secondary";
    href?: string | undefined;
}
function NavbarButton({children, type, href}: Props){
    let selector = styles.style_secondary;
    if (type === "primary"){
        selector = styles.style_primary;
    }

    return (
        <>
            <a className={selector} href={href}>
                <div className={styles.button}>{children}</div>
            </a>
        </>
    );
}

export default NavbarButton;