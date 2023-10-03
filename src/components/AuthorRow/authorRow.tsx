import { FC } from "react";

import { useTranslation } from "@/app/i18n";
import { AuthorCard } from "@/components";
import { AUTHORS } from "@/constants";

import { AuthorRowProps } from "./authorRow.interfaces";

import styles from "./authorRow.module.scss";

export const AuthorRow: FC<AuthorRowProps> = async ({ full, lng }) => {
    const { t } = await useTranslation(lng, "authorRow");

    const renderList = (): JSX.Element[] => {
        const items = full ? [...AUTHORS] : AUTHORS.slice(0, AUTHORS.length / 2);

        return items.map((author) => <AuthorCard key={author.id} author={author} lng={lng} />);
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{t("title")}</h2>
            <div className={styles.row}>{renderList()}</div>
        </section>
    );
};
