"use client";

import { FC, SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";

import { ENV_VARS } from "@/constants";
import { Button, Input } from "@/UI";
import { subscribeFormSchema } from "@/validators";

import styles from "./subscribeForm.module.scss";

export const SubscribeForm: FC = () => {
    const [value, setValue] = useState<string>("");
    const [hasError, setHasError] = useState<boolean>(false);

    const onChangeHandler = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;

        setValue(target.value);
    };

    const sendEmail = async (): Promise<void> => {
        const data = {
            email: value,
        };

        const isDataValid = await subscribeFormSchema.isValid(data, {
            abortEarly: false,
        });

        if (isDataValid) {
            const service = ENV_VARS.EMAILJS_SERVICE;
            const template = ENV_VARS.EMAILJS_SUBSCRIBE_TEMPLATE;
            const key = ENV_VARS.EMAILJS_PUBLIC_KEY;

            if (service && template && key) {
                await emailjs.send(
                    service,
                    template,
                    {
                        email: value,
                    },
                    key
                );
            }
            setHasError(false);
            setValue("");
        } else {
            subscribeFormSchema.validate(data, { abortEarly: false }).catch(() => {
                setHasError(true);
            });
        }
    };

    return (
        <form className={styles.form}>
            <Input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={value}
                onChange={onChangeHandler}
                hasError={hasError}
                dark
            />
            <Button yellow width="50%" onClick={sendEmail}>
                Subscribe
            </Button>
        </form>
    );
};
