import { FC } from "react";

import { MapComponent } from "@/components";
import { ButtonBackgroundColor } from "@/constants";
import { Container } from "@/hocs";
import { Button, Input } from "@/UI";

import styles from "./page.module.scss";

const Contact: FC = () => (
    <>
        <Container>
            <section className={styles.top}>
                <h5 className={styles.topSupTitle}>Contact us</h5>
                <h1 className={styles.topTitle}>Let’s Start a Conversation</h1>
                <p className={styles.topText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
            </section>
            <section className={styles.formHeader}>
                <div className={styles.formHeaderRow}>
                    <div className={styles.formHeaderBlock}>
                        <div className={styles.blockHeader}>
                            <p>Working hours</p>
                        </div>
                        <div className={styles.blockContent}>
                            <h5 className={styles.blockTitle}>Monday To Friday</h5>
                            <h5 className={styles.blockTitle}>9:00 AM to 8:00 PM </h5>
                            <p className={styles.blockText}>Our Support Team is available 24/7</p>
                        </div>
                    </div>
                    <div className={styles.formHeaderBlock}>
                        <div className={styles.blockHeader}>
                            <p>Contact Us</p>
                        </div>
                        <div className={styles.blockContent}>
                            <h5 className={styles.blockTitle}>020 7993 2905</h5>
                            <p className={styles.blockText}>hello@finsweet.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <form className={styles.form}>
                <Input name="name" placeholder="Full Name" />
                <Input name="email" placeholder="Your Email" />
                <select name="query" placeholder="Query Related" />
                <textarea name="message" placeholder="Message" />
                <Button backgroundColor={ButtonBackgroundColor.YELLOW}>Send Message</Button>
            </form>
        </Container>
        <MapComponent />
    </>
);

export default Contact;
