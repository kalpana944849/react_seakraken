import React from "react";
import styles from "../../components/input/input.module.scss"

const Input=(props)=>{
    return(
        <div className={styles.input} >
            <input type={props.types} placeholder={props.placeholder}/>
        </div>
    );
}
export default Input;