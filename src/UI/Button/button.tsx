"use client";

import { FC } from "react";
import clsx from "clsx";

import { ButtonProps } from "./button.interfaces";

import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = (props) => {
    const { children, width, type, yellow, white, ...restProps } = props;

    return (
        <button
            type={type || "button"}
            {...restProps}
            className={clsx({
                [styles.button]: true,
                [styles.buttonYellow]: yellow,
                [styles.buttonWhite]: white,
                [styles.buttonHalfWidth]: width,
            })}>
            {children}
        </button>
    );
};
