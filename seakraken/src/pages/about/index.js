import React from "react";
import styles from "../about/about.module.scss";
import Button from "../../components/button";

const About = () => {

    const skills = [
        '3D Animation',
        '2D Animation',
        'Modelling',
        'Motion Graphics',
        'Brand Design',
        'Website Design and Development',
        'Content Management Systems (CMS)',
        'Application Designs and Development ',
        'E-Learning Platforms',
        'Web Hosting and Maintenance',
        'Search Engine Optimization (SEO)',
        'UI/UX Design',
        'Social Media Integration',
        'Security Services',
        'Consultation and Strategy'

    ];

    return (
        <section className={styles.about}>
            <div className="container">
                <h2 className={styles.heading} >
                    <span className={styles.heading_main}>
                        about me
                    </span>
                    <div className={styles.heading_underline}></div>
                    <span className={styles.heading_sub}>Sea Kraken Studio is an animation studio that specializes in producing
                     high-quality animated content for businesses, individuals, and organizations. We work closely with our clients
                      to bring their ideas to life through stunning and engaging animations that captivate their audience.

                    </span>
                </h2>

                <div className={styles.content}>
                    <div className={styles.content_title}>
                        <h3>
                            Our Mission </h3>
                        <div className={styles.details}>
                            <p>
                            At the core of <strong>Sea Kraken Studios </strong> 's  mission is the commitment to redefine the digital landscape.
                             We aim to empower businesses, organizations, and individuals with cutting-edge animation and web development
                              services that not only meet but exceed their expectations. Our mission is to be the catalyst for your digital success story.
                            </p>

                            <p>At <strong>Sea Kraken Studios</strong>, we are passionate about bringing ideas to life through the perfect blend of
                                 animation and web development. As a dynamic team of creative minds and tech enthusiasts, we strive 
                                 to push the boundaries of digital experiences, delivering solutions that captivate, engage, and 
                                 inspire.
                            </p>

                            <p>
                            Your success is our success. We prioritize understanding your goals and tailor our solutions to meet
                             your unique needs.
                            Explore the possibilities with <strong>Sea Kraken Studios</strong>. Let's embark on a journey of creativity, innovation, 
                            and digital excellence together.


                            </p>
                            <Button name="contact" />
                        </div>
                    </div>

                    <div className={styles.content_skills}>
                        <h3>Our Skills</h3>
                        <div className={styles.technologies}>
                            {
                                skills.map(skill => <div key={skill} className={styles.skills_skill}
                                >{skill}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;