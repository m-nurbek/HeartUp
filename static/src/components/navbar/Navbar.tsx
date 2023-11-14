import styles from "./styles.module.css"
import NavbarButton from "./NavbarButton.tsx";
import ChevronDown from "../../assets/chevron_down.svg"
import CompanyLogo from "../../assets/company_logo.svg"

function Navbar() {
    return (
    <>
        <div className={styles.navbar}>
            <img className={styles.heartup_logo} alt="Heartup logo" src={CompanyLogo} />
            <div className={styles.column}>
                <div className={styles.links_wrapper}>
                    <a className={styles.link} href={""}>About Us</a>
                    <a className={styles.link} href={""}>Services</a>
                    <a className={styles.link} href={""}>Projects</a>
                    <div className={styles.navLinkDropdown}>
                        <a className={styles.link} href={""}>
                            <span>More</span>
                            <img className={styles.chevronDown} alt="Chevron down" src={ChevronDown} />
                        </a>
                    </div>
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