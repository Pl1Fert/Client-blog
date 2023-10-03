import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import { LanguageSwitcher, NavBar, SubscribeForm } from "@/components";
import { BLOG_SOCIAL_LINKS } from "@/constants";
import { Container } from "@/hocs";

import { FooterProps } from "./footer.interfaces";

import styles from "./footer.module.scss";

export const Footer: FC<FooterProps> = async ({ lng }) => {
    const { t } = await useTranslation(lng, "footer");

    return (
        <footer className={styles.footer}>
            <Container>
                <NavBar full lng={lng} />
                <div className={styles.footerContent}>
                    <h2 className={styles.title}>{t("title")}</h2>
                    <SubscribeForm lng={lng} />
                    <div className={styles.background} />
                </div>
                <div className={styles.row}>
                    <p className={styles.text}>
                        Finstreet 118 2561 Fintown <br />
                        Hello@finsweet.com 020 7993 2905
                    </p>
                    <LanguageSwitcher lng={lng} />
                    <div className={styles.socials}>
                        {BLOG_SOCIAL_LINKS.map(({ id, href, icon }) => (
                            <Link key={id} href={href}>
                                {icon ? <Image src={icon.lightIcon} alt={icon.alt} /> : <p>Link</p>}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};
