"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { AppRoutes } from "@/constants";

import { AuthorCardProps } from "./authorCard.interfaces";

import styles from "./authorCard.module.scss";

export const AuthorCard: FC<AuthorCardProps> = ({ author: { id, name, role, socials, img } }) => {
    const router = useRouter();

    const clickHandler = (): void => {
        router.push(`${AppRoutes.AUTHORS}/${id}`);
    };

    return (
        <div className={styles.card} onClick={clickHandler}>
            <div className={styles.imageWrapper}>
                <Image src={img} alt={name} loading="lazy" />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.role}>{role}</p>
            <div className={styles.socials}>
                {socials.map(({ id, href, icon }) => (
                    <Link key={id} href={href}>
                        {icon ? (
                            <Image src={icon.darkIcon} alt={icon.alt} loading="lazy" />
                        ) : (
                            <p>Link</p>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};
