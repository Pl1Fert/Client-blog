import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import { CategoryItem, JoinUs } from "@/components";
import PostsScroll from "@/components/PostsScroll/postsScroll";
import { AppRoutes, CATEGORIES, POSTS } from "@/constants";
import { Container } from "@/hocs";
import { Button } from "@/UI";

import { PostsProps } from "./page.interfaces";

import styles from "./page.module.scss";

const Posts: FC<PostsProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng, "posts");
    const feauturedPost = POSTS[0];

    return (
        <>
            <section className={styles.top}>
                <Container>
                    <div className={styles.topInner}>
                        <div className={styles.topContent}>
                            <h5 className={styles.topSupTitle}>{t("top.supTitle")}</h5>
                            <h2 className={styles.topTitle}>{feauturedPost.title}</h2>
                            <p className={styles.topText}>{feauturedPost.description}</p>
                            <Button yellow width="50%">
                                <Link href={`/${lng}${AppRoutes.POSTS}/${feauturedPost.id}`}>
                                    {t("top.button")}
                                </Link>
                            </Button>
                        </div>
                        <Image src={feauturedPost.img} alt={feauturedPost.title} loading="lazy" />
                    </div>
                </Container>
            </section>
            <Container>
                <PostsScroll lng={lng} />
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
        </>
    );
};

export default Posts;
