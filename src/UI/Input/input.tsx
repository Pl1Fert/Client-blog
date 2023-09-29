"use client";

import { FC } from "react";
import clsx from "clsx";

import { InputProps } from "./input.interfaces";

import styles from "./input.module.scss";

export const Input: FC<InputProps> = (props) => {
    const { type, width, dark, light, ...restProps } = props;

    return (
        <input
            type={type || "text"}
            {...restProps}
            className={clsx({
                [styles.input]: true,
                [styles.inputDark]: dark,
                [styles.inputHalfWidth]: width,
                [styles.inputLight]: light,
            })}
        />
    );
};
