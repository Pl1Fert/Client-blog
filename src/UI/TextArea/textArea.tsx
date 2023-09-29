import { FC } from "react";
import clsx from "clsx";

import { TextAreaProps } from "./textArea.interfaces";

import styles from "./textArea.module.scss";

export const TextArea: FC<TextAreaProps> = (props) => {
    const { width, dark, light, ...restProps } = props;

    return (
        <textarea
            {...restProps}
            className={clsx({
                [styles.textArea]: true,
                [styles.textAreaDark]: dark,
                [styles.textAreaHalfWidth]: width,
                [styles.textAreaLight]: light,
            })}
        />
    );
};
