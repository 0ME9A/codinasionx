"use client";
import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import { clipBoartBtnType } from "app/_types/Links&Btns";
import { clipBoard2 } from "app/_functions/functions";
import { useState } from "react";

export default function ClipBoard({ clipText, style }: clipBoartBtnType) {
    let [clip, setClip] = useState<boolean>(false)

    const handleClipBoard = async () => {
        const success = await clipBoard2(clipText);
        if (success) { setClip(true) }
        else { setClip(false) }
        setTimeout(() => { setClip(false) }, 3000);
    }

    return (
        <button
            type={"button"}
            title={clip ? "Copied" : "Copy"}
            onClick={() => handleClipBoard()}
            className={`text-xl text-black float-right relative aspect-square p-1 rounded-lg hover:scale-110 ${clip ? 'bg-green-500' : 'bg-yellow-500'} ${style}`}>
            {clip ? <HiOutlineClipboardCheck /> : <HiOutlineClipboard />}
        </button>
    );
}
