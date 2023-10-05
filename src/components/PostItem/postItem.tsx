"use client";

import { FC } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { AppRoutes } from "@/constants";

import { PostItemProps } from "./postItem.interfaces";

import styles from "./postItem.module.scss";

export const PostItem: FC<PostItemProps> = ({
    post: { img, title, description, category, id },
    lng,
    column,
    small,
}) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push(`/${lng}${AppRoutes.POSTS}/${id}`);
    };

    return (
        <div
            className={clsx(styles.post, column && styles.postColumn)}
            onClick={clickHandler}
            data-cy="item">
            <Image
                src={img}
                alt={title}
                loading="lazy"
                className={clsx(styles.postImage, small && styles.postImageSmall)}
            />
            <div className={styles.postContent}>
                <h5 className={styles.postCategory}>{category}</h5>
                <h2 className={styles.postTitle}>{title}</h2>
                <p className={styles.postDescription}>{description}</p>
            </div>
        </div>
    );
};
