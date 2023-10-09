"use client";

import { FC, SyntheticEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ValidationError } from "yup";

import { useTranslation } from "@/app/i18n/client";
import { ENV_VARS, MAIL_QUERIES } from "@/constants";
import { Button, Input, Select, TextArea } from "@/UI";
import { contactFormSchema } from "@/validators";

import { initialErrors, initialState } from "./contactForm.config";
import { FormErrorsState, FormProps, FormState } from "./contactForm.interfaces";

import styles from "./contactForm.module.scss";

export const ContactForm: FC<FormProps> = ({ lng }) => {
    const [formData, setFormData] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<FormErrorsState>(initialErrors);
    const { t } = useTranslation(lng, "contact");

    const onChangeHandler = (e: SyntheticEvent): void => {
        const { name, value } = e.target as HTMLInputElement;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = async (): Promise<void> => {
        const isDataValid = await contactFormSchema.isValid(formData, {
            abortEarly: false,
        });

        if (isDataValid) {
            const service = ENV_VARS.EMAILJS_SERVICE;
            const template = ENV_VARS.EMAILJS_CONTACT_TEMPLATE;
            const key = ENV_VARS.EMAILJS_PUBLIC_KEY;

            if (service && template && key) {
                await emailjs.send(
                    service,
                    template,
                    {
                        name: formData.name,
                        email: formData.email,
                        query: formData.query,
                        message: formData.message,
                    },
                    key
                );
            }
            setErrors({ ...initialErrors });
            setFormData({ ...initialState });
        } else {
            contactFormSchema.validate(formData, { abortEarly: false }).catch((err) => {
                const error = err as ValidationError;
                const errors = error.inner.reduce(
                    (acc, error) => ({
                        ...acc,
                        [error.path!]: true,
                    }),
                    {}
                );

                setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
            });
        }
    };

    useEffect(() => {
        if (formData.email || formData.name || formData.message || formData.query) {
            contactFormSchema
                .validate(formData, { abortEarly: false })
                .then(() => {
                    setErrors({ ...initialErrors });
                })
                .catch((err) => {
                    const error = err as ValidationError;
                    const errors = error.inner.reduce(
                        (acc, error) => ({
                            ...acc,
                            [error.path!]: true,
                        }),
                        {}
                    );

                    setErrors({ ...initialErrors, ...errors });
                });
        }
    }, [formData]);

    return (
        <form className={styles.form}>
            <Input
                name="name"
                placeholder={t("form.name")}
                value={formData.name}
                onChange={onChangeHandler}
                hasError={errors.name}
                light
            />
            <Input
                name="email"
                placeholder={t("form.email")}
                value={formData.email}
                onChange={onChangeHandler}
                hasError={errors.email}
                light
            />
            <Select
                name="query"
                label={t("form.query")}
                options={MAIL_QUERIES.map((query) => t(`form.queries.${query}`))}
                onChange={onChangeHandler}
                hasError={errors.query}
                light
            />
            <TextArea
                name="message"
                placeholder={t("form.message")}
                value={formData.message}
                onChange={onChangeHandler}
                hasError={errors.message}
                light
            />
            <Button yellow onClick={sendEmail}>
                {t("form.button")}
            </Button>
        </form>
    );
};
