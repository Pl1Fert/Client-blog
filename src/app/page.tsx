import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Background from "@/assets/images/home/background.jpg";
import People from "@/assets/images/home/people.jpg";
import Post from "@/assets/images/home/white-concrete-building-1838640.jpg";
import { AuthorRow, Carousel, CategoryItem, JoinUs } from "@/components";
import { AppRoutes, CATEGORIES, HOME_POSTS, LOGOS, TESTIMONIALS_CARDS } from "@/constants";
import { Container } from "@/hocs";
import { Button } from "@/UI";

import styles from "./page.module.scss";

const Home: FC = () => (
    <>
        <section className={styles.top}>
            <Image src={Background} alt="background" loading="lazy" className={styles.topImage} />
            <div className={styles.topBackground} />
            <div className={styles.topInner}>
                <h5 className={styles.topSupTitle}>
                    Posted on <span>startup</span>
                </h5>
                <h1 className={styles.topTitle}>Step-by-step guide to choosing great font pairs</h1>
                <p className={styles.topText}>
                    By <span>James West</span> | May 23, 2022{" "}
                </p>
                <p className={styles.topText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <Button yellow width="50%">
                    <Link href={`${AppRoutes.POSTS}/1`}>Read More {">"}</Link>
                </Button>
            </div>
        </section>
        <Container>
            <section className={styles.posts}>
                <article className={styles.featuredPost}>
                    <h2 className={styles.postsTitle}>Featured Post</h2>
                    <div className={styles.featuredPostContent}>
                        <Image src={Post} alt="post" loading="lazy" />
                        <p className={styles.featuredPostAuthor}>By John Doe | May 23, 2022</p>
                        <h3 className={styles.featuredPostTitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor.
                        </h3>
                        <p className={styles.featuredPostText}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident.
                        </p>
                        <Button yellow width="50%">
                            <Link href={`${AppRoutes.POSTS}/2`}>Read More {">"}</Link>
                        </Button>
                    </div>
                </article>
                <article className={styles.allPosts}>
                    <div className={styles.allPostsHeader}>
                        <h2>All Posts</h2>
                        <Link href={AppRoutes.POSTS} className={styles.allPostsLink}>
                            View All
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
                        <h5 className={styles.aboutSupTitle}>ABOUT US</h5>
                        <h2 className={styles.aboutTitle}>
                            We are a community of content writers who share their learnings
                        </h2>
                        <p className={styles.aboutText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </article>
                    <article className={styles.aboutBlock}>
                        <h5 className={styles.aboutSupTitle}>Our mision</h5>
                        <h3 className={styles.aboutTitle}>
                            Creating valuable content for creatives all around the world
                        </h3>
                        <p className={styles.aboutText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
                            enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
                            adipiscing at in tellus.
                        </p>
                    </article>
                </div>
                <Link href={AppRoutes.ABOUT} className={styles.aboutLink}>
                    Read More {">"}
                </Link>
            </section>
            <section className={styles.categories}>
                <h2 className={styles.categoriesTitle}>Choose A Catagory</h2>
                <div className={styles.categoriesRow}>
                    {CATEGORIES.map((item) => (
                        <CategoryItem key={item.id} item={item} />
                    ))}
                </div>
            </section>
            <section className={styles.whyWeStarted}>
                <Image src={People} alt="people" loading="lazy" />
                <div className={styles.whyWeStartedContent}>
                    <h5 className={styles.whyWeStartedSupTitle}>Why we started</h5>
                    <h1 className={styles.whyWeStartedTitle}>
                        It started out as a simple idea and evolved into our passion
                    </h1>
                    <p className={styles.whyWeStartedText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <Button yellow width="50%">
                        <Link href={AppRoutes.ABOUT}>Discover Our Story {">"}</Link>
                    </Button>
                </div>
            </section>
            <AuthorRow />
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
                supTitle="TESTIMONIALS"
                title="What people say about our blog"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                items={TESTIMONIALS_CARDS}
            />
            <JoinUs />
        </Container>
    </>
);

export default Home;
