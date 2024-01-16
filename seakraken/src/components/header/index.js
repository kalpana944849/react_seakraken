import React, { useState } from "react";
import styles from "../header/header.module.scss";
import logo from "../../images/assets/sea-logo.jpg"
import hamburgIcon from "../../images/assets/hamburg.jpg";
import crossIcon from "../../images/assets/cross-icon.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {

    const [show, setShow] = useState(true)
    const navigate = useNavigate()

    const handleChange = () => {
        setShow(!show);
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.content_info}>
                        <div className={styles.logo}>
                            <img src={logo} alt />
                        </div>
                        <span className={styles.text}>Sea Kraken Studios</span>
                    </div>

                    <ul className={styles.content_list}>
                        <li><a onClick={()=>{navigate('/home')}}>HOME</a></li>
                        <li><a onClick={()=>{navigate('/about')}}>ABOUT</a></li>
                        <li><a onClick={()=>{navigate('/projects')}}>PROJECTS</a></li>
                        <li><a onClick={()=>{navigate('/contact')}}>CONTACT</a></li>
                    </ul>
                    <div className={styles.content_icons}>
                        {show ? <img src={hamburgIcon} onClick={handleChange} /> :
                            <img src={crossIcon} onClick={handleChange} />}
                    </div>


                </div>
                    <div className={`${styles.menu} ${!show && styles.menushow}` }>
                        <ul >
                            <li><a>HOME</a></li>
                            <li><a>ABOUT</a></li>
                            <li><a>PROJECTS</a></li>
                            <li><a>CONTACT</a></li>
                        </ul>
                    </div>
            </div>
        </header>
    );
}
export default Header;

