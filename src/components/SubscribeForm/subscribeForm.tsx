"use client";

import { FC } from "react";

import { ButtonBackgroundColor } from "@/constants";
import { Button, Input } from "@/UI";

import styles from "./subscribeForm.module.scss";

export const SubscribeForm: FC = () => (
    <form className={styles.form}>
        <Input type="text" name="email" placeholder="Enter Your Email" />
        <Button backgroundColor={ButtonBackgroundColor.YELLOW}>Subscribe</Button>
    </form>
);
