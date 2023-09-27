import { FC } from "react";

import { NavBar } from "@/components";
import { ButtonBackgroundColor } from "@/constants";
import { Button } from "@/UI";

import styles from "./header.module.scss";

export const Header: FC = () => (
    <header className={styles.header}>
        <NavBar />
        <Button backgroundColor={ButtonBackgroundColor.WHITE}>Video About Us</Button>
    </header>
);
