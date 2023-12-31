"use client";

import { FC, SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";

import { useTranslation } from "@/app/i18n/client";
import { ENV_VARS } from "@/constants";
import { Button, Input } from "@/UI";
import { subscribeFormSchema } from "@/validators";

import { FormProps } from "./subscribeForm.interfaces";

import styles from "./subscribeForm.module.scss";

export const SubscribeForm: FC<FormProps> = ({ lng }) => {
    const [value, setValue] = useState<string>("");
    const [hasError, setHasError] = useState<boolean>(false);
    const { t } = useTranslation(lng, "footer");

    const onChangeHandler = (e: SyntheticEvent): void => {
        const { value } = e.target as HTMLInputElement;

        const data = {
            email: value,
        };

        subscribeFormSchema
            .validate(data, { abortEarly: false })
            .then(() => {
                setHasError(false);
            })
            .catch(() => {
                setHasError(true);
            });

        setValue(value);
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
                placeholder={t("form.email")}
                value={value}
                onChange={onChangeHandler}
                hasError={hasError}
                dark
            />
            <Button yellow width="50%" onClick={sendEmail}>
                {t("form.button")}
            </Button>
        </form>
    );
};
