import { FC } from "react";
import clsx from "clsx";

import { useTranslation } from "@/app/i18n";
import { Container } from "@/hocs";

import { PrivacyPolicyProps } from "./page.interfaces";

import styles from "./page.module.scss";

const PrivacyPolicy: FC<PrivacyPolicyProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng, "privacyPolicy");

    return (
        <>
            <section className={styles.top}>
                <h1>{t("top.title")}</h1>
                <p className={styles.text}>{t("top.text")}</p>
            </section>
            <section className={styles.section}>
                <Container>
                    <article className={styles.article}>
                        <h1 className={styles.title}>{t("title")}</h1>
                        <p className={styles.text}>{t("firstText")}</p>
                    </article>
                    <article className={styles.article}>
                        <h2 className={styles.subTitle}>{t("subTitle")}</h2>
                        <p className={styles.text}>{t("secondText")}</p>
                        <p className={clsx(styles.text, styles.lastText)}>{t("secondText")}</p>
                    </article>
                </Container>
            </section>
        </>
    );
};

export default PrivacyPolicy;
