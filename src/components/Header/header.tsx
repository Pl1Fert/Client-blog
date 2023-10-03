import { FC } from "react";

import { NavBar } from "@/components";
import { Button } from "@/UI";

import { HeaderProps } from "./header.interfaces";

import styles from "./header.module.scss";

export const Header: FC<HeaderProps> = ({ lng }) => (
    <header className={styles.header}>
        <NavBar lng={lng} />
        <div>
            <Button white>Video About Us</Button>
        </div>
    </header>
);
