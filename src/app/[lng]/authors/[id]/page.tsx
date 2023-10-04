import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import { PostItem } from "@/components";
import { AUTHORS, POSTS } from "@/constants";
import { Container } from "@/hocs";

import { AuthorProps } from "./page.interfaces";

import styles from "./page.module.scss";

const Author: FC<AuthorProps> = async ({ params: { lng, id } }) => {
    const { t } = await useTranslation(lng, "author");

    const { name, img, posts, socials, description } = AUTHORS.find(
        (item) => item.id === parseInt(id, 10)
    )!;

    const authorPosts = POSTS.filter((post) => posts.includes(post.id));

    return (
        <>
            <section className={styles.top}>
                <div className={styles.topInner}>
                    <Image src={img} alt="author" loading="lazy" className={styles.topImage} />
                    <div className={styles.topContent}>
                        <h1 className={styles.topTitle}>
                            {t("top.title.firstPart")}
                            {name}
                            {t("top.title.secondPart")}
                        </h1>
                        <p className={styles.topText}>{description}</p>
                        <div className={styles.socials}>
                            {socials.map(({ id, href, icon }) => (
                                <Link key={id} href={href}>
                                    <Image src={icon.darkIcon} alt={icon.alt} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.yellowBlock} />
                    <div className={styles.purpleBlock} />
                </div>
            </section>
            <Container>
                <section className={styles.posts}>
                    {authorPosts.length > 0 ? (
                        <>
                            <h2 className={styles.postsTitle}>{t("posts.title")}</h2>
                            <div className={styles.postsRow}>
                                {authorPosts.map((post) => (
                                    <PostItem key={post.id} lng={lng} post={post} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <h2 className={styles.postsSecondTitle}>{t("posts.secondTitle")}</h2>
                    )}
                </section>
            </Container>
        </>
    );
};

export default Author;
