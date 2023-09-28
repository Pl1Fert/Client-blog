import { FC } from "react";

import { AuthorCard } from "@/components";
import { AUTHORS } from "@/constants";
import { Container } from "@/hocs";

import { AuthorRowProps } from "./authorRow.interfaces";

import styles from "./authorRow.module.scss";

export const AuthorRow: FC<AuthorRowProps> = ({ full }) => {
    const renderList = (): JSX.Element[] => {
        const items = full ? [...AUTHORS] : AUTHORS.slice(0, AUTHORS.length / 2);

        return items.map((author) => <AuthorCard key={author.id} author={author} />);
    };

    return (
        <section className={styles.section}>
            <Container>
                <h2 className={styles.title}>List of Authors</h2>
                <div className={styles.row}>{renderList()}</div>
            </Container>
        </section>
    );
};
