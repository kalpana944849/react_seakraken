import React from "react";
import styles from "../footer/footer.module.scss";
import pic1 from "../../images/assets/linkedin-icon.png";
import pic2 from "../../images/assets/github-icon.png";
import pic3 from "../../images/assets/twitter-icon.png";
import pic4 from "../../images/assets/blog-icon.png";
import pic5 from "../../images/assets/yt-icon.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.content_about}>
                        <h2> Sea Kraken Studios </h2>
                        <p>
                        "Transforming Ideas into Experiences, Pixels into Emotions."
                        </p>
                    </div>


                    <div className={styles.content_social}>
                        <h2><span>social</span></h2>

                        <div className={styles.icons}>
                            <a><img src={pic1} alt="linkedin_image" /></a>
                            <a><img src={pic2} alt="github_image" /></a>
                            <a><img src={pic3} alt="twitter_image" /></a>
                            <a><img src={pic4} alt="blog_image" /></a>
                            <a><img src={pic5} alt="youtube_image" /></a>

                        </div>
                    </div>

                   
                </div>
                <div className={styles.line}>
                    </div>

                    <div className={styles.main}>
                        © Copyright 2023. Made by <a href="#sea kraken studios"> Sea Kraken Studios</a>
                    </div>
            </div>
        </footer>
    );
}
export default Footer;
