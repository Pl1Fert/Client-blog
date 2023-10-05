import { FC } from "react";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import { AppRoutes } from "@/constants";
import { Button } from "@/UI";

import { JoinUsProps } from "./joinUs.interfaces";

import styles from "./joinUs.module.scss";

export const JoinUs: FC<JoinUsProps> = async ({ lng }) => {
    const { t } = await useTranslation(lng, "joinUs");

    return (
        <section className={styles.inner}>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.text}>{t("text")}</p>
            <Button yellow width="50%">
                <Link href={`/${lng}${AppRoutes.CONTACT}`}>{t("button")}</Link>
            </Button>
        </section>
    );
};
