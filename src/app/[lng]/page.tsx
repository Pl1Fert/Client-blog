import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import Background from "@/assets/images/home/background.jpg";
import People from "@/assets/images/home/people.jpg";
import Post from "@/assets/images/home/white-concrete-building-1838640.jpg";
import { AuthorRow, Carousel, CategoryItem, JoinUs } from "@/components";
import { AppRoutes, CATEGORIES, HOME_POSTS, LOGOS, TESTIMONIALS_CARDS } from "@/constants";
import { Container } from "@/hocs";
import { Button } from "@/UI";

import styles from "./page.module.scss";

interface HomeProps {
    params: {
        lng: string;
    };
}

const Home: FC<HomeProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng);

    return (
        <>
            <section className={styles.top}>
                <Image
                    src={Background}
                    alt="background"
                    loading="lazy"
                    className={styles.topImage}
                />
                <div className={styles.topBackground} />
                <div className={styles.topInner}>
                    <h5 className={styles.topSupTitle}>
                        {t("top.supTitle.supTitle")}
                        <span>{t("top.supTitle.span")}</span>
                    </h5>
                    <h1 className={styles.topTitle}>{t("top.title")}</h1>
                    <p className={styles.topText}>
                        {t("top.text.firstPart")}
                        <span>{t("top.text.span")}</span>
                        {t("top.text.secondPart")}
                    </p>
                    <p className={styles.topText}>{t("top.text.text")}</p>
                    <Button yellow width="50%">
                        <Link href={`/${lng}${AppRoutes.POSTS}/1`}>{t("top.button")}</Link>
                    </Button>
                </div>
            </section>
            <Container>
                <section className={styles.posts}>
                    <article className={styles.featuredPost}>
                        <h2 className={styles.postsTitle}>{t("posts.title")}</h2>
                        <div className={styles.featuredPostContent}>
                            <Image src={Post} alt="post" loading="lazy" />
                            <p className={styles.featuredPostAuthor}>
                                {t("posts.featuredPost.author")}
                            </p>
                            <h3 className={styles.featuredPostTitle}>
                                {t("posts.featuredPost.title")}
                            </h3>
                            <p className={styles.featuredPostText}>
                                {t("posts.featuredPost.text")}
                            </p>
                            <Button yellow width="50%">
                                <Link href={`/${lng}${AppRoutes.POSTS}/2`}>
                                    {t("posts.featuredPost.button")}
                                </Link>
                            </Button>
                        </div>
                    </article>
                    <article className={styles.allPosts}>
                        <div className={styles.allPostsHeader}>
                            <h2> {t("posts.allPosts.title")}</h2>
                            <Link
                                href={`/${lng}${AppRoutes.POSTS}`}
                                className={styles.allPostsLink}>
                                {t("posts.allPosts.link")}
                            </Link>
                        </div>
                        <div className={styles.allPostsColumn}>
                            {HOME_POSTS.map(({ id, author, date, title }) => (
                                <div key={id} className={styles.post}>
                                    <p className={styles.postAuthor}>
                                        By {author} | {date}
                                    </p>
                                    <h4 className={styles.postTitle}>{title}</h4>
                                </div>
                            ))}
                        </div>
                    </article>
                </section>
                <div className={styles.blocks}>
                    <div className={styles.whiteBlock} />
                    <div className={styles.yellowBlock} />
                    <div className={styles.purpleBlock} />
                </div>
                <section className={styles.about}>
                    <div className={styles.aboutRow}>
                        <article className={styles.aboutBlock}>
                            <h5 className={styles.aboutSupTitle}>{t("about.supTitle")}</h5>
                            <h2 className={styles.aboutTitle}>{t("about.title")}</h2>
                            <p className={styles.aboutText}>{t("about.text")}</p>
                        </article>
                        <article className={styles.aboutBlock}>
                            <h5 className={styles.aboutSupTitle}>{t("about.block.supTitle")}</h5>
                            <h3 className={styles.aboutTitle}>{t("about.block.title")}</h3>
                            <p className={styles.aboutText}>{t("about.block.text")}</p>
                        </article>
                    </div>
                    <Link href={`/${lng}${AppRoutes.ABOUT}`} className={styles.aboutLink}>
                        {t("about.button")}
                    </Link>
                </section>
                <section className={styles.categories}>
                    <h2 className={styles.categoriesTitle}>{t("categories.title")}</h2>
                    <div className={styles.categoriesRow}>
                        {CATEGORIES.map((item) => (
                            <CategoryItem key={item.id} item={item} lng={lng} />
                        ))}
                    </div>
                </section>
                <section className={styles.whyWeStarted}>
                    <Image src={People} alt="people" loading="lazy" />
                    <div className={styles.whyWeStartedContent}>
                        <h5 className={styles.whyWeStartedSupTitle}>
                            {t("whyWeStarted.supTitle")}
                        </h5>
                        <h1 className={styles.whyWeStartedTitle}>{t("whyWeStarted.title")}</h1>
                        <p className={styles.whyWeStartedText}>{t("whyWeStarted.text")}</p>
                        <Button yellow width="50%">
                            <Link href={`/${lng}${AppRoutes.ABOUT}`}>
                                {t("whyWeStarted.button")}
                            </Link>
                        </Button>
                    </div>
                </section>
                <AuthorRow lng={lng} />
                <div className={styles.logos}>
                    <div className={styles.logosTitle}>
                        <p>We are</p>
                        <h4>Featured in</h4>
                    </div>
                    {LOGOS.map(({ id, img, alt }) => (
                        <Image
                            key={id}
                            src={img}
                            alt={alt}
                            className={styles.logosItem}
                            loading="lazy"
                        />
                    ))}
                </div>
                <Carousel
                    supTitle={t("carousel.supTitle")}
                    title={t("carousel.title")}
                    text={t("carousel.text")}
                    items={TESTIMONIALS_CARDS}
                />
                <JoinUs lng={lng} />
            </Container>
        </>
    );
};

export default Home;
