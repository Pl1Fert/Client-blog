"use client";

import { FC } from "react";
import emailjs from "@emailjs/browser";

import { ENV_VARS } from "@/constants";
import { Button, Input } from "@/UI";

import styles from "./subscribeForm.module.scss";

export const SubscribeForm: FC = () => {
    const sendEmail = async () => {
        const service = ENV_VARS.EMAILJS_SERVICE;
        const template = ENV_VARS.EMAILJS_SUBSCRIBE_TEMPLATE;
        const key = ENV_VARS.EMAILJS_PUBLIC_KEY;

        if (service && template && key) {
            await emailjs.send(
                service,
                template,
                {
                    email: "alex@mail.ru",
                },
                key
            );
        }
    };

    return (
        <form className={styles.form}>
            <Input type="text" name="email" placeholder="Enter Your Email" dark />
            <Button yellow width="50%" onClick={sendEmail}>
                Subscribe
            </Button>
        </form>
    );
};
