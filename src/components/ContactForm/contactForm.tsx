"use client";

import { FC } from "react";
import emailjs from "@emailjs/browser";

import { ENV_VARS, MAIL_QUERIES } from "@/constants";
import { Button, Input, Select, TextArea } from "@/UI";

import styles from "./contactForm.module.scss";

export const ContactForm: FC = () => {
    const sendEmail = async () => {
        const service = ENV_VARS.EMAILJS_SERVICE;
        const template = ENV_VARS.EMAILJS_CONTACT_TEMPLATE;
        const key = ENV_VARS.EMAILJS_PUBLIC_KEY;

        if (service && template && key) {
            await emailjs.send(
                service,
                template,
                {
                    name: "A",
                    email: "alex@mail.ru",
                    query: "Problem",
                    message: "msg",
                },
                key
            );
        }
    };

    return (
        <form className={styles.form}>
            <Input name="name" placeholder="Full Name" light />
            <Input name="email" placeholder="Your Email" light />
            <Select name="query" label="Query Related" options={MAIL_QUERIES} light />
            <TextArea name="message" placeholder="Message" light />
            <Button yellow onClick={sendEmail}>
                Send Message
            </Button>
        </form>
    );
};
