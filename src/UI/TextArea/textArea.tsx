import { FC } from "react";
import clsx from "clsx";

import { TextAreaProps } from "./textArea.interfaces";

import styles from "./textArea.module.scss";

export const TextArea: FC<TextAreaProps> = (props) => {
    const { width, dark, light, hasError, ...restProps } = props;

    return (
        <div className={styles.container}>
            <textarea
                {...restProps}
                className={clsx({
                    [styles.textArea]: true,
                    [styles.textAreaDark]: dark,
                    [styles.textAreaHalfWidth]: width,
                    [styles.textAreaLight]: light,
                })}
            />
            {hasError && <p className={styles.error}>Please fill in correct value</p>}
        </div>
    );
};
