import { FC } from "react";

import { useTranslation } from "@/app/i18n";
import { CategoryItem, JoinUs } from "@/components";
import { CATEGORIES } from "@/constants";
import { Container } from "@/hocs";

import { PostsProps } from "./page.interfaces";

import styles from "./page.module.scss";

const Posts: FC<PostsProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng, "posts");

    return (
        <Container>
            <section className={styles.categories}>
                <h2 className={styles.categoriesTitle}>{t("categories.title")}</h2>
                <div className={styles.categoriesRow}>
                    {CATEGORIES.map((item) => (
                        <CategoryItem key={item.id} item={item} lng={lng} />
                    ))}
                </div>
            </section>
            <JoinUs lng={lng} />
        </Container>
    );
};

export default Posts;
