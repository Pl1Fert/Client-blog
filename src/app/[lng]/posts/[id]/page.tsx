import { FC } from "react";
import Image from "next/image";

import { useTranslation } from "@/app/i18n";
import { JoinUs, PostItem } from "@/components";
import { CATEGORIES, POSTS } from "@/constants";
import { Container } from "@/hocs";

import { PostProps } from "./page.interfaces";

import styles from "./page.module.scss";

const Post: FC<PostProps> = async ({ params: { lng, id } }) => {
    const { t } = await useTranslation(lng, "post");
    const { title, img, category, content } = POSTS.find((item) => item.id === parseInt(id, 10))!;
    const otherPosts = POSTS.filter((item) => item.category === category)
        .slice(0, 3)
        .filter((item) => item.id !== parseInt(id, 10));
    const categoryInfo = CATEGORIES.find((item) => item.id === category)!;

    return (
        <Container>
            <section className={styles.content}>
                <h1 className={styles.contentTitle}>{title}</h1>
                <div className={styles.contentCategory}>
                    <Image src={categoryInfo.icon} alt={categoryInfo.title} loading="lazy" />
                    <h4 className={styles.contentCategoryTitle}>{category}</h4>
                </div>
                <Image src={img} alt={title} loading="lazy" className={styles.contentImage} />
                {content.map(({ title, text, id }) => (
                    <article key={id} className={styles.post}>
                        <h2 className={styles.postTitle}>{title}</h2>
                        <p className={styles.postText}>{text}</p>
                    </article>
                ))}
            </section>
            <section className={styles.posts}>
                <h3 className={styles.postsTitle}>{t("posts.title")}</h3>
                <div className={styles.postsRow}>
                    {otherPosts.map((post) => (
                        <PostItem key={post.id} post={post} lng={lng} column />
                    ))}
                </div>
            </section>
            <JoinUs lng={lng} />
        </Container>
    );
};

export default Post;
