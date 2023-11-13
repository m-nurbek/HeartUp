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
                    <div className={styles.link}>About Us</div>
                    <div className={styles.link}>Services</div>
                    <div className={styles.link}>Projects</div>
                    <div className={styles.navLinkDropdown}>
                        <div className={styles.link}>More
                            <img className={styles.chevronDown} alt="Chevron down" src={ChevronDown} />
                        </div>
                    </div>
                </div>
                <div className={styles.actions}>
                <NavbarButton type={"secondary"}>Sign Up</NavbarButton>
                <NavbarButton type={"primary"}>Login</NavbarButton>
                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar;