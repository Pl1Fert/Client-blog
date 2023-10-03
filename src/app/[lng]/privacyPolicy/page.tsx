import { FC } from "react";
import clsx from "clsx";

import { FIRST_PRIVACY_POLICY, SECOND_PRIVACY_POLICY } from "@/constants";
import { Container } from "@/hocs";

import styles from "./page.module.scss";

const PrivacyPolicy: FC = () => (
    <>
        <section className={styles.top}>
            <h1>Privacy Policy</h1>
            <p className={styles.text}>Last Updated on 27th January 2022</p>
        </section>
        <section className={styles.section}>
            <Container>
                <article className={styles.article}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
                    <p className={styles.text}>{FIRST_PRIVACY_POLICY}</p>
                </article>
                <article className={styles.article}>
                    <h2 className={styles.subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.
                    </h2>
                    <p className={styles.text}>{SECOND_PRIVACY_POLICY}</p>
                    <p className={clsx(styles.text, styles.lastText)}>{SECOND_PRIVACY_POLICY}</p>
                </article>
            </Container>
        </section>
    </>
);

export default PrivacyPolicy;
