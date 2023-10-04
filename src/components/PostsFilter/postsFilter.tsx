"use client";

import { FC, SyntheticEvent, useEffect, useState } from "react";
import clsx from "clsx";

import { useTranslation } from "@/app/i18n/client";
import { CategoryItem, PostItem } from "@/components";
import { CATEGORIES, POSTS, TAGS } from "@/constants";
import { Input } from "@/UI";

import { PostsFilterProps } from "./postsFilter.interfaces";

import styles from "./postsFilter.module.scss";

const PostsFilter: FC<PostsFilterProps> = ({ lng, title, posts: comingPosts }) => {
    const { t } = useTranslation(lng, "categories");
    const [value, setValue] = useState<string>("");
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [posts, setPosts] = useState<typeof POSTS>(comingPosts);

    const onChangeHandler = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;

        setValue(target.value);
    };

    const onTagClickHandler = (e: SyntheticEvent) => {
        const { innerText } = e.target as HTMLElement;

        if (activeTags.includes(innerText)) {
            setActiveTags(activeTags.filter((tag) => tag !== innerText));
        } else {
            setActiveTags([...activeTags, innerText]);
        }
    };

    useEffect(() => {
        setPosts(POSTS.filter((post) => post.category === title));
    }, []);

    useEffect(() => {
        let bufPosts = comingPosts;

        if (value) {
            bufPosts = posts.filter((post) => post.tags.join(" ").toLowerCase().includes(value));
        }
        if (activeTags.length > 0) {
            bufPosts = posts.filter((post) => post.tags.some((r) => activeTags.includes(r)));
        }

        setPosts([...bufPosts]);
    }, [activeTags, value]);

    return (
        <section className={styles.section}>
            <div className={styles.posts}>
                {posts.length > 0 ? (
                    posts.map((post) => <PostItem key={post.id} post={post} lng={lng} small />)
                ) : (
                    <h2>No Posts</h2>
                )}
            </div>
            <aside className={styles.aside}>
                <div className={styles.asideInput}>
                    <Input
                        placeholder="Search Tag"
                        light
                        value={value}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={styles.categories}>
                    <h2 className={styles.categoriesTitle}>{t("categories.title")}</h2>
                    <div className={styles.categoriesRow}>
                        {CATEGORIES.map((item) => (
                            <CategoryItem key={item.id} item={item} lng={lng} small />
                        ))}
                    </div>
                </div>
                <div className={styles.tags}>
                    <h2 className={styles.tagsTitle}>{t("tags.title")}</h2>
                    {TAGS.map(({ id, title }) => (
                        <div
                            className={clsx(
                                styles.tagsItem,
                                activeTags.includes(title) && styles.tagsItemActive
                            )}
                            key={id}
                            onClick={onTagClickHandler}>
                            {title}
                        </div>
                    ))}
                </div>
            </aside>
        </section>
    );
};

export default PostsFilter;
