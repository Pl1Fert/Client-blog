import { FC } from "react";
import Link from "next/link";

import { NavBar } from "@/components";
import { AppRoutes } from "@/constants";

import styles from "./header.module.scss";

export const Header: FC = () => (
    <header className={styles.header}>
        <Link href={AppRoutes.HOME} className={styles.homeLink}>
            Modsen Client Blog
        </Link>
        <NavBar />
    </header>
);
