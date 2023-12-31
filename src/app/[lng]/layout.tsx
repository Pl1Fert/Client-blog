import { FC, ReactNode } from "react";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Sen } from "next/font/google";

import { languages } from "@/app/i18n/settings";
import { Footer, Header } from "@/components";

import "@/styles/mapBox.css";
import "@/styles/globals.scss";

const sen = Sen({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const generateStaticParams = () => languages.map((lng) => ({ lng }));

export const metadata: Metadata = {
    title: "Client Blog",
    description: "Generated by create next app",
};

interface RootLayoutProps {
    children: ReactNode;
    params: {
        lng: string;
    };
}

const RootLayout: FC<RootLayoutProps> = ({ children, params: { lng } }) => (
    <html lang={lng} dir={dir(lng)}>
        <body className={sen.className}>
            <Header lng={lng} />
            <main>{children}</main>
            <Footer lng={lng} />
        </body>
    </html>
);

export default RootLayout;
