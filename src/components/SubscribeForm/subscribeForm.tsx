"use client";

import { FC } from "react";

import { Button, Input } from "@/UI";

import styles from "./subscribeForm.module.scss";

export const SubscribeForm: FC = () => (
    <form className={styles.form}>
        <Input type="text" name="email" placeholder="Enter Your Email" dark />
        <Button yellow width="50%">
            Subscribe
        </Button>
    </form>
);
