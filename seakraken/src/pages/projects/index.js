import React from "react";
import styles from "../projects/projects.module.scss";
import pic1 from "../../images/assets/Project1.png";
import pic2 from "../../images/assets/Project2.png";
import pic3 from "../../images/assets/Project3.png";
import pic4 from "../../images/assets/Project4.png";
import Button from "../../components/button";

const Projects = () => {

    const projects=[
        {
            icon:pic1,
            heading:"Dopefolio",
            about: "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
        },
        {
            icon:pic2,
            heading:"Wilsonport ",
            about: "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
        },
        {
            icon:pic3,
            heading:"Boreal Coffee Clone ",
            about: "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
        },
        {
            icon:pic4,
            heading:"Crown Template",
            about: "Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.",
        }
    ];
    return (
        <section className={styles.projects}>
            <div className="container">
                <h2 className={styles.title}>
                    <span className={styles.title_main}>Projects</span>
                    <div className={styles.title_underline}></div>
                    <span className={styles.title_sub}> Here you will find some of the personal and clients projects that I created with each project
                        containing its own case study</span>
                </h2>

                <div className={styles.content}>
                    {
                        projects.map((item) => (
                            <div className={styles.content_about}>
                                <div className={styles.img}>
                                    <img src={item.icon} />
                                </div>
                                <div className={styles.text}>
                                    <h3>{item.heading}</h3>
                                    <p>{item.about}</p>
                                    <Button name="Case Study" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Projects;