import { FC } from "react";

import { NavBar } from "@/components";
import { Button } from "@/UI";

import styles from "./header.module.scss";

export const Header: FC = () => (
    <header className={styles.header}>
        <NavBar />
        <div>
            <Button white>Video About Us</Button>
        </div>
    </header>
);
