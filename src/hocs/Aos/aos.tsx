"use client";

import { FC } from "react";
import clsx from "clsx";

import { useElementOnScreen } from "@/hooks";

import { AosProps } from "./aos.interfaces";

import styles from "./aos.module.scss";

export const Aos: FC<AosProps> = ({ children, reappear, threshold = 0.5 }) => {
    const [containerRef, isVisible] = useElementOnScreen({
        threshold,
        reappear,
    });

    return (
        <div
            ref={containerRef}
            className={clsx(
                styles.item,
                isVisible && styles.itemVisible,
                !isVisible && styles.itemNotVisible
            )}>
            {children}
        </div>
    );
};
