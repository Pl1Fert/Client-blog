import { FC } from "react";

import { ContainerProps } from "./container.interfaces";

import styles from "./container.module.scss";

export const Container: FC<ContainerProps> = ({ children }) => (
    <div className={styles.container}>{children}</div>
);
