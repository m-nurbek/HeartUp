import styles from "./styles.module.css"
import NavbarButton from "./NavbarButton.tsx";
import ChevronDown from "../../assets/chevron_down.svg"
import CompanyLogo from "../../assets/company_logo.svg"
import {useState} from "react";

function Navbar() {
    const [on, setOn] = useState<boolean>(false);

    const toggleNavbar = () => {
        const currentViewportSize = window.innerWidth;
        if(currentViewportSize < 900) {
            setOn(false);
        }
    }

    return (
    <>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img className={styles.heartup_logo} alt="Heartup logo" src={CompanyLogo} />
                <div className={styles.icon}>
                    <button className="btn btn-dark" type="button" onClick={toggleNavbar}>X</button>
                </div>
            </div>
            <div className={styles.column} id={"toggle"} style={on ? {display: "none"} : {display:"flex"}}>
                <div className={styles.links_wrapper}>
                    <a className={styles.link} href={""}>About Us</a>
                    <a className={styles.link} href={""}>Services</a>
                    <a className={styles.link} href={""}>Projects</a>
                    <a className={styles.link + " " + styles.more} href={""}>
                        <div className={styles.span}>
                            <span>More</span>
                        </div>
                        <img className={styles.chevronDown} alt="Chevron down" src={ChevronDown} />
                    </a>
                </div>
                <div className={styles.actions}>
                    <NavbarButton type={"secondary"} href={""}>Sign Up</NavbarButton>
                    <NavbarButton type={"primary"} href={""}>Login</NavbarButton>
                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar;