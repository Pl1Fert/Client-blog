"use client";

import { FC } from "react";
import clsx from "clsx";

import { ButtonProps } from "./button.interfaces";

import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { children, type, backgroundColor, ...restProps } = props;

    return (
        <button
            type={type || "button"}
            {...restProps}
            className={clsx({
                [styles.button]: true,
                [styles.buttonYellow]: backgroundColor === "yellow",
                [styles.buttonWhite]: backgroundColor === "white",
            })}>
            {children}
        </button>
    );
};
