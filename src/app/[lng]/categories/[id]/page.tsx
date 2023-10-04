import { FC } from "react";

import PostsFilter from "@/components/PostsFilter/postsFilter";
import { CATEGORIES, POSTS } from "@/constants";
import { Container } from "@/hocs";

import { CategoryProps } from "./page.interfaces";

import styles from "./page.module.scss";

const Category: FC<CategoryProps> = ({ params: { lng, id } }) => {
    const { title, text } = CATEGORIES.find((item) => item.id === id)!;

    const posts = POSTS.filter((post) => post.category === title);

    return (
        <>
            <section className={styles.top}>
                <div className={styles.topInner}>
                    <h1 className={styles.topTitle}>{id}</h1>
                    <p className={styles.topText}>{text}</p>
                </div>
            </section>
            <Container>
                <PostsFilter lng={lng} title={title} posts={posts} />
            </Container>
        </>
    );
};

export default Category;
