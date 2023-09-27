import { FC } from "react";
import Link from "next/link";

import { AppRoutes, ButtonBackgroundColor } from "@/constants";
import { Button } from "@/UI";

import styles from "./not-found.module.scss";

const NotFound: FC = () => (
    <section className={styles.section}>
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subTitle}>UH OH! You&apos;re lost.</h2>
            <p className={styles.text}>
                The page you are looking for does not exist. How you got here is a mystery. But you
                can click the button below to go back to the homepage.
            </p>
            <Button backgroundColor={ButtonBackgroundColor.YELLOW}>
                <Link href={AppRoutes.HOME}>Home</Link>
            </Button>
        </div>
    </section>
);

export default NotFound;
