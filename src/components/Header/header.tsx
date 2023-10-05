import { FC } from "react";

import { NavBar } from "@/components";

import Modal from "../Modal/modal";

import { HeaderProps } from "./header.interfaces";

import styles from "./header.module.scss";

export const Header: FC<HeaderProps> = ({ lng }) => (
    <header className={styles.header}>
        <NavBar lng={lng} />
        <Modal lng={lng} />
    </header>
);
