import { FC } from "react";

import { useTranslation } from "@/app/i18n";
import { ContactForm, MapComponent } from "@/components";
import { Container } from "@/hocs";

import { ContactProps } from "./page.interfaces";

import styles from "./page.module.scss";

const Contact: FC<ContactProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng, "contact");

    return (
        <>
            <Container>
                <section className={styles.top}>
                    <h5 className={styles.topSupTitle}>{t("top.supTitle")}</h5>
                    <h1 className={styles.topTitle}>{t("top.title")}</h1>
                    <p className={styles.topText}>{t("top.text")}</p>
                </section>
                <section className={styles.formHeader}>
                    <div className={styles.formHeaderRow}>
                        <div className={styles.formHeaderBlock}>
                            <div className={styles.blockHeader}>
                                <p>{t("header.block_1.title")}</p>
                            </div>
                            <div className={styles.blockContent}>
                                <h5 className={styles.blockTitle}>{t("header.block_1.days")}</h5>
                                <h5 className={styles.blockTitle}>{t("header.block_1.time")}</h5>
                                <p className={styles.blockText}>{t("header.block_1.text")}</p>
                            </div>
                        </div>
                        <div className={styles.formHeaderBlock}>
                            <div className={styles.blockHeader}>
                                <p>{t("header.block_2.title")}</p>
                            </div>
                            <div className={styles.blockContent}>
                                <h5 className={styles.blockTitle}>020 7993 2905</h5>
                                <p className={styles.blockText}>hello@finsweet.com</p>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactForm lng={lng} />
            </Container>
            <MapComponent />
        </>
    );
};

export default Contact;
