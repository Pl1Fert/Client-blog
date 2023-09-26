"use client";

import { FC } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AppRoutes } from "@/constants";

import { NavBarItemProps } from "./navBarItem.interfaces";

import styles from "./navBarItem.module.scss";

export const NavBarItem: FC<NavBarItemProps> = ({ link: { href, title } }) => {
    const pathname = usePathname() as AppRoutes;

    return (
        <Link href={href} className={clsx(styles.link, pathname === href && styles.linkActive)}>
            {title}
        </Link>
    );
};
