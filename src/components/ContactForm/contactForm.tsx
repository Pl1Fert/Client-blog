"use client";

import { FC, SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ValidationError } from "yup";

import { ENV_VARS, MAIL_QUERIES } from "@/constants";
import { Button, Input, Select, TextArea } from "@/UI";
import { contactFormSchema } from "@/validators";

import { FormErrorsState, FormState } from "./contactForm.interfaces";

import styles from "./contactForm.module.scss";

const initialState: FormState = {
    name: "",
    email: "",
    query: "",
    message: "",
};

const initialErrors: FormErrorsState = {
    name: false,
    email: false,
    query: false,
    message: false,
};

export const ContactForm: FC = () => {
    const [formData, setFormData] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<FormErrorsState>(initialErrors);

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

    return (
        <form className={styles.form}>
            <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={onChangeHandler}
                hasError={errors.name}
                light
            />
            <Input
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={onChangeHandler}
                hasError={errors.email}
                light
            />
            <Select
                name="query"
                label="Query Related"
                options={MAIL_QUERIES}
                onChange={onChangeHandler}
                hasError={errors.query}
                light
            />
            <TextArea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={onChangeHandler}
                hasError={errors.message}
                light
            />
            <Button yellow onClick={sendEmail}>
                Send Message
            </Button>
        </form>
    );
};
