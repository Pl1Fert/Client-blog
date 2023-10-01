"use client";

import { FC, useEffect } from "react";

import { Button } from "@/UI";

import styles from "./error.module.scss";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    const clickHandler = (): void => {
        reset();
    };

    return (
        <html lang="en">
            <body>
                <section className={styles.section}>
                    <h2 className={styles.title}>Something went wrong!</h2>
                    <Button yellow width="50%" onClick={clickHandler}>
                        Try Again
                    </Button>
                </section>
            </body>
        </html>
    );
};

export default Error;
