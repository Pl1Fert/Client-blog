import { FC } from "react";
import Image from "next/image";

import Background from "@/assets/images/about/background.jpg";
import DescriptionImage_1 from "@/assets/images/about/ground-group-growth-hands-461049.jpg";
import DescriptionImage_2 from "@/assets/images/about/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.jpg";
import { AuthorRow, JoinUs } from "@/components";
import { Container } from "@/hocs";

import styles from "./page.module.scss";

const About: FC = () => (
    <Container>
        <section className={styles.top}>
            <div className={styles.topHeaders}>
                <h5 className={styles.topSupTitle}>ABOUT US</h5>
                <h1 className={styles.topTitle}>
                    We are a team of content writers who share their learnings
                </h1>
            </div>
            <div className={styles.topContent}>
                <p className={styles.topText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
        <section className={styles.stats}>
            <Image src={Background} alt="Background" loading="lazy" />
            <div className={styles.whiteBlock} />
            <div className={styles.yellowBlock} />
            <div className={styles.purpleBlock} />
            <div className={styles.statsRow}>
                <div className={styles.statsBlock}>
                    <h1 className={styles.statsTitle}>12+</h1>
                    <p className={styles.statsText}>Blogs Published</p>
                </div>
                <div className={styles.statsBlock}>
                    <h1 className={styles.statsTitle}>18K+</h1>
                    <p className={styles.statsText}>Views on Finsweet</p>
                </div>
                <div className={styles.statsBlock}>
                    <h1 className={styles.statsTitle}>30K+</h1>
                    <p className={styles.statsText}>Total active Users</p>
                </div>
            </div>
        </section>
        <section className={styles.misionVision}>
            <div className={styles.misionVisionRow}>
                <article className={styles.misionVisionBlock}>
                    <h5 className={styles.misionVisionSupTitle}>Our mision</h5>
                    <h3 className={styles.misionVisionTitle}>
                        Creating valuable content for creatives all around the world
                    </h3>
                    <p className={styles.misionVisionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
                        nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
                        at in tellus.
                    </p>
                </article>
                <article className={styles.misionVisionBlock}>
                    <h5 className={styles.misionVisionSupTitle}>Our Vision</h5>
                    <h3 className={styles.misionVisionTitle}>
                        A platform that empowers individuals to improve
                    </h3>
                    <p className={styles.misionVisionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
                        nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
                        at in tellus.
                    </p>
                </article>
            </div>
        </section>
        <section className={styles.descriptionRow}>
            <article className={styles.descriptionContent}>
                <h2 className={styles.descriptionTitle}>Our team of creatives</h2>
                <h4 className={styles.descriptionSubTitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt.
                </h4>
                <p className={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat.
                </p>
            </article>
            <div className={styles.descriptionImage}>
                <Image src={DescriptionImage_1} alt="ground-group-growth-hands" loading="lazy" />
                <div className={styles.figure_1} />
            </div>
        </section>
        <section className={styles.descriptionRow}>
            <div className={styles.descriptionImage}>
                <Image
                    src={DescriptionImage_2}
                    alt="three-persons-sitting-on-the-stairs"
                    loading="lazy"
                />
                <div className={styles.figure_2} />
            </div>
            <article className={styles.descriptionContent}>
                <h2 className={styles.descriptionTitle}>Why we started this Blog</h2>
                <h4 className={styles.descriptionSubTitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt.
                </h4>
                <p className={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat.
                </p>
            </article>
        </section>
        <AuthorRow full />
        <JoinUs />
    </Container>
);

export default About;
