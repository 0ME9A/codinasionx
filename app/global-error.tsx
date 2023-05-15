'use client';
import BtnLink from "./_components/Links&Btns/BtnLink";
import Head from "./head";
import "./globals.css";

type globalError = {
    error: Error;
    reset: () => void;
}
export default function GlobalError({ error, reset }: globalError) {

    return (
        <html>
            <Head />
            <body className="w-full h-screen flex items-center gap-2 justify-center">
                <h2 className="text-3xl">Something went wrong!</h2>
                <BtnLink href={"/"} title={"Try again"}>Try again</BtnLink>
            </body>
        </html>
    );
}