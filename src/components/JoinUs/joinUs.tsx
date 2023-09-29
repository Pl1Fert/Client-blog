import { FC } from "react";
import Link from "next/link";

import { AppRoutes } from "@/constants";
import { Button } from "@/UI";

import styles from "./joinUs.module.scss";

export const JoinUs: FC = () => (
    <section className={styles.inner}>
        <h2 className={styles.title}>Join our team to be a part of our story</h2>
        <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
        </p>
        <Button yellow width="50%">
            <Link href={AppRoutes.CONTACT}>Join Now</Link>
        </Button>
    </section>
);
