"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { languages } from "@/app/i18n/settings";

import { LanguageSwitcherProps } from "./languageSwitcher.interfaces";

import styles from "./languageSwitcher.module.scss";

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lng }) => {
    const pathname = usePathname().slice(3);

    return (
        <>
            {languages
                .filter((l) => lng !== l)
                .map((l, index) => (
                    <span key={l} className={styles.switcher}>
                        {index > 0 && " or "}
                        <Link href={`/${l}/${pathname}`}>{l}</Link>
                    </span>
                ))}
        </>
    );
};
