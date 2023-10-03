"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { AppRoutes } from "@/constants";

import { PostItemProps } from "./postItem.interfaces";

import styles from "./postItem.module.scss";

export const PostItem: FC<PostItemProps> = ({
    post: { img, title, description, category, id },
    lng,
}) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push(`/${lng}${AppRoutes.POSTS}/${id}`);
    };

    return (
        <div className={styles.post} onClick={clickHandler}>
            <Image src={img} alt={title} loading="lazy" className={styles.postImage} />
            <div className={styles.postContent}>
                <h5 className={styles.postCategory}>{category}</h5>
                <h2 className={styles.postTitle}>{title}</h2>
                <p className={styles.postDescription}>{description}</p>
            </div>
        </div>
    );
};
