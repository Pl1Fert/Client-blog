"use client";

import { FC } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AppRoutes, LINKS } from "@/constants";

import { NavBarProps } from "./navBar.interfaces";

import styles from "./navBar.module.scss";

export const NavBar: FC<NavBarProps> = ({ full }) => {
    const pathname = usePathname() as AppRoutes;

    const renderNav = (): JSX.Element[] => {
        const links: typeof LINKS = full ? [...LINKS] : [...LINKS.slice(0, -1)];

        return links.map(({ id, title, href }) => (
            <Link
                key={id}
                href={href}
                className={clsx(styles.link, pathname === href && styles.linkActive)}>
                {title}
            </Link>
        ));
    };

    return (
        <div className={styles.row}>
            <Link href={AppRoutes.HOME} className={styles.homeLink}>
                Modsen Client Blog
            </Link>
            <nav className={styles.nav}>{renderNav()}</nav>
        </div>
    );
};
