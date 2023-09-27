"use client";

import { FC } from "react";
import clsx from "clsx";

import { ButtonBackgroundColor } from "@/constants";

import { ButtonProps } from "./button.interfaces";

import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = (props) => {
    const { label, type, backgroundColor, ...restProps } = props;

    return (
        <button
            type={type || "button"}
            {...restProps}
            className={clsx({
                [styles.button]: true,
                [styles.buttonYellow]: backgroundColor === ButtonBackgroundColor.YELLOW,
                [styles.buttonWhite]: backgroundColor === ButtonBackgroundColor.WHITE,
            })}>
            {label}
        </button>
    );
};
