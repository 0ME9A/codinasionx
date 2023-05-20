'use client';
import BtnLink from "./_components/Links&BtnsComp/BtnLink";
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
                <h1 className="text-3xl">Something went wrong!</h1>
                <BtnLink href={"/"} title={"Try again"}>Try again</BtnLink>
            </body>
        </html>
    );
}