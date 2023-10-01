import { FC } from "react";

import { CategoryItem, JoinUs } from "@/components";
import { CATEGORIES } from "@/constants";
import { Container } from "@/hocs";

import styles from "./page.module.scss";

const Posts: FC = () => (
    <Container>
        <section className={styles.categories}>
            <h2 className={styles.categoriesTitle}>All Categories</h2>
            <div className={styles.categoriesRow}>
                {CATEGORIES.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))}
            </div>
        </section>
        <JoinUs />
    </Container>
);

export default Posts;
