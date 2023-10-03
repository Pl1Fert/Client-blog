import { FC } from "react";

import { useTranslation } from "@/app/i18n";
import { NavBar } from "@/components";
import { Button } from "@/UI";

import { HeaderProps } from "./header.interfaces";

import styles from "./header.module.scss";

export const Header: FC<HeaderProps> = async ({ lng }) => {
    const { t } = await useTranslation(lng, "header");

    return (
        <header className={styles.header}>
            <NavBar lng={lng} />
            <div>
                <Button white>{t("button")}</Button>
            </div>
        </header>
    );
};
