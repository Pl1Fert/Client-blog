import { FC } from "react";
import Image from "next/image";

import { AuthorRow, Carousel, JoinUs } from "@/components";
import { LOGOS, TESTIMONIALS_CARDS } from "@/constants";
import { Container } from "@/hocs";

import styles from "./page.module.scss";

const Home: FC = () => (
    <Container>
        <AuthorRow />
        <div className={styles.logos}>
            <div className={styles.logosTitle}>
                <p>We are</p>
                <h4>Featured in</h4>
            </div>
            {LOGOS.map(({ id, img, alt }) => (
                <Image key={id} src={img} alt={alt} className={styles.logosItem} loading="lazy" />
            ))}
        </div>
        <Carousel
            supTitle="TESTIMONIALS"
            title="What people say about our blog"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            items={TESTIMONIALS_CARDS}
        />
        <JoinUs />
    </Container>
);

export default Home;
