import { FC } from "react";

import { HeaderButton, NavBarItem } from "@/components";
import { NAV_LINKS } from "@/constants";

import styles from "./navBar.module.scss";

export const NavBar: FC = () => (
    <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
            <NavBarItem key={link.id} link={link} />
        ))}
        <HeaderButton />
    </nav>
);
