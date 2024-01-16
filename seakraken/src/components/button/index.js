import React from "react";
import styles from "../button/button.module.scss";

const Button=(props)=>{
    return(
        <div className={styles.button}>
            <button type="submit">{props.name}</button>
        </div>
    );
}

export default Button;