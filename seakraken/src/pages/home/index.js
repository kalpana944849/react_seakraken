import React from "react";
import styles from "../home/home.module.scss";
import Button from "../../components/button";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Home = () => {
    return (
            <section className={styles.home}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.content_text}>
                            <h1>Sea Kraken Studios
                            </h1>
                        </div>
                        <div className={styles.content_info}>
                            <p>"Animating your ideas into reality - Welcome to our studio."
                            </p>
                        </div>
                        <div className={styles.content_button}>
                            <Button name="projects" />
                        </div>
                    </div>
                </div>
            </section>
    )

}
export default Home;