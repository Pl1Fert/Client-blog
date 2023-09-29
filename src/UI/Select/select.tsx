import { FC } from "react";
import clsx from "clsx";

import { SelectProps } from "./select.interfaces";

import styles from "./select.module.scss";

export const Select: FC<SelectProps> = (props) => {
    const { label, width, dark, light, defaultValue, options, ...restProps } = props;

    return (
        <select
            defaultValue=""
            className={clsx({
                [styles.select]: true,
                [styles.selectDark]: dark,
                [styles.selectHalfWidth]: width,
                [styles.selectLight]: light,
            })}
            {...restProps}>
            <option value="" disabled>
                {label}
            </option>
            {options.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};
