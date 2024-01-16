import React from "react";
import styles from "../contact/contact.module.scss";
import Button from "../../components/button";
import Input from "../../components/input";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className="container">
                <h2 className={styles.title}>
                    <span className={styles.title_main}>Contact</span>
                    <div className={styles.title_underline}></div>
                    <span className={styles.title_sub}>Feel free to Contact us by submitting the form below and we will get back to you as soon as possible</span>
                </h2>
                <div className={styles.content}>
                    <form className={styles.content_form}>
                        <div className={styles.input}>
                            <label>Name</label>
                            <Input type="text" placeholder="Enter Your Name" />
                        </div>

                        <div className={styles.input}>
                            <label>Email</label>
                            <Input type="text" placeholder="Enter Your Email" />
                        </div>

                        <div className={styles.textarea} >
                            <label>Message</label>
                            <textarea required="" cols="30" rows="10" placeholder="Enter Your Message" className={styles.textarea} ></textarea>
                        </div>
                        <div className={styles.button}>
                            <Button name="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;