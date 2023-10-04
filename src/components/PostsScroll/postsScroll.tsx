"use client";

import { FC, Fragment, useState } from "react";
import clsx from "clsx";

import { useTranslation } from "@/app/i18n/client";
import { PostItem } from "@/components";
import { POSTS } from "@/constants";

import { PostsScrollProps } from "./postsScroll.interfaces";

import styles from "./postsScroll.module.scss";

const PostsScroll: FC<PostsScrollProps> = ({ lng }) => {
    const { t } = useTranslation(lng, "posts");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const postsAmountToShow = 5;
    const carouselItemsAmount = Math.ceil(POSTS.length / postsAmountToShow);

    const handlePrevClick = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? carouselItemsAmount - 1 : prevIndex - 1
        );
    };

    const handleNextClick = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 === carouselItemsAmount ? 0 : prevIndex + 1));
    };

    const renderCarouselItems = (): JSX.Element[] => {
        const items: JSX.Element[] = [];

        let postsIndex = 0;
        for (let i = 0; i < carouselItemsAmount; i += 1) {
            items.push(
                <Fragment key={i}>
                    {POSTS.slice(postsIndex, postsIndex + postsAmountToShow).map((post) => (
                        <PostItem key={post.id} lng={lng} post={post} />
                    ))}
                </Fragment>
            );
            postsIndex += postsAmountToShow;
        }

        return items;
    };

    return (
        <section className={styles.posts}>
            <h2 className={styles.postsTitle}>{t("posts.title")}</h2>
            <div className={styles.carousel}>
                {renderCarouselItems().map((item, index) => (
                    <div
                        key={item.key}
                        className={clsx(
                            styles.carouselItem,
                            currentIndex === index && styles.carouselItemActive
                        )}>
                        {item}
                    </div>
                ))}
            </div>
            <div className={styles.carouselControls}>
                <span onClick={handlePrevClick} className={styles.carouselControlsItem}>
                    {t("posts.controls.prev")}
                </span>
                <span onClick={handleNextClick} className={styles.carouselControlsItem}>
                    {t("posts.controls.next")}
                </span>
            </div>
        </section>
    );
};

export default PostsScroll;
