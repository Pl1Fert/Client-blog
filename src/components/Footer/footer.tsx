import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavBar, SubscribeForm } from "@/components";
import { BLOG_SOCIAL_LINKS } from "@/constants";
import { Container } from "@/hocs";

import styles from "./footer.module.scss";

export const Footer: FC = () => (
    <footer className={styles.footer}>
        <Container>
            <NavBar full />
            <div className={styles.footerContent}>
                <h2 className={styles.title}>
                    Subscribe to our news letter to get latest updates and news
                </h2>
                <SubscribeForm />
                <div className={styles.background} />
            </div>
            <div className={styles.row}>
                <p className={styles.text}>
                    Finstreet 118 2561 Fintown <br />
                    Hello@finsweet.com 020 7993 2905
                </p>
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
