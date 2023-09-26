import type { Metadata } from "next";
import { Sen } from "next/font/google";

import { Footer, Header } from "@/components";

import "@/styles/globals.scss";

const sen = Sen({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: "Client Blog",
    description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body className={sen.className}>
            <Header />
            <main>{children}</main>
            <Footer />
            <div id="modal-root" />
        </body>
    </html>
);

export default RootLayout;
