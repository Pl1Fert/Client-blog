"use client";

import { FC } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { AppRoutes } from "@/constants";

import { CategoryItemProps } from "./categoryItem.interfaces";

import styles from "./categoryItem.module.scss";

export const CategoryItem: FC<CategoryItemProps> = ({ small, item: { id, text, icon, title } }) => {
    const router = useRouter();

    const clickHandler = (): void => {
        router.push(`${AppRoutes.CATEGORIES}/${id}`);
    };

    return (
        <div className={clsx(styles.card, small && styles.cardSmall)} onClick={clickHandler}>
            <div className={styles.iconWrapper}>
                <Image src={icon} alt={title} loading="lazy" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            {!small && <p className={styles.text}>{text}</p>}
        </div>
    );
};
