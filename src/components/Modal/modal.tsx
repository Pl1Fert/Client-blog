"use client";

import { FC, useState } from "react";

import { useTranslation } from "@/app/i18n/client";
import { Button } from "@/UI";

import { ModalProps } from "./modal.interfaces";

import styles from "./modal.module.scss";

const Modal: FC<ModalProps> = ({ lng }) => {
    const { t } = useTranslation(lng, "header");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisible = (): void => {
        setIsVisible((prev) => !prev);
    };

    const modalContent = (
        <div onClick={toggleVisible} className={styles.modalWrapper}>
            <div className={styles.modalContent}>
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=0rizBOc6_jxykHs3"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles.modalVideo}
                />
            </div>
            <div className={styles.modalBackground} />
        </div>
    );

    return (
        <>
            <div className={styles.button}>
                <Button white onClick={toggleVisible}>
                    {t("button")}
                </Button>
            </div>
            {isVisible && modalContent}
        </>
    );
};

export default Modal;
