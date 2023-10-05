"use client";

import { FC, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import { CarouselProps } from "./carousel.interfaces";

import styles from "./carousel.module.scss";

export const Carousel: FC<CarouselProps> = ({ items, supTitle, text, title }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrevClick = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNextClick = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 === items.length ? 0 : prevIndex + 1));
    };

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h5 className={styles.contentSupTitle}>{supTitle}</h5>
                    <h2 className={styles.contentTitle}>{title}</h2>
                    <p className={styles.contentText}>{text}</p>
                </div>
                <div className={styles.carousel}>
                    <div className={styles.carouselItems}>
                        {items.map(({ id, text, img, author, from }, index) => (
                            <div
                                key={id}
                                className={clsx(
                                    styles.carouselItem,
                                    currentIndex === index && styles.carouselItemActive
                                )}>
                                <h4 className={styles.carouselItemText}>{text}</h4>
                                <div className={styles.carouselItemInfo}>
                                    <Image src={img} alt={author} className={styles.authorImage} />
                                    <div className={styles.author}>
                                        <h4 className={styles.authorName}>{author}</h4>
                                        <p className={styles.authorFrom}>{from}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.carouselControls}>
                        <div
                            className={clsx(styles.carouselButton, styles.carouselButtonPrev)}
                            onClick={handlePrevClick}>
                            <span className={styles.arrow} />
                        </div>
                        <div
                            className={clsx(styles.carouselButton, styles.carouselButtonNext)}
                            onClick={handleNextClick}>
                            <span className={styles.arrow} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
