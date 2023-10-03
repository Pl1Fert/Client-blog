"use client";

import { FC } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslation } from "@/app/i18n/client";
import { AppRoutes, LINKS } from "@/constants";

import { NavBarProps } from "./navBar.interfaces";

import styles from "./navBar.module.scss";

export const NavBar: FC<NavBarProps> = ({ full, lng }) => {
    const pathname = usePathname();
    const { t } = useTranslation(lng, "links");

    const renderNav = (): JSX.Element[] => {
        const links: typeof LINKS = full ? [...LINKS] : [...LINKS.slice(0, -1)];

        return links.map(({ id, title, href }) => {
            const to = href.length === 1 ? `/${lng}` : `/${lng}${href}`;
            return (
                <Link
                    key={id}
                    href={to}
                    className={clsx(styles.link, pathname === to && styles.linkActive)}>
                    {t(title)}
                </Link>
            );
        });
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
