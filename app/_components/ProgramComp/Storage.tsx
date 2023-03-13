"use client";
import { dispatchProgram } from "app/_functions/DispatchFetch";
import { theContext } from "app/_context/theContext";
import { useContext, useEffect } from "react";

type storageType = {
    data: any;
    status: number
}
export default function Storage({ data, status }: storageType) {
    const context = useContext(theContext);
    useEffect(() => {
        dispatchProgram(context.dispatch, data, status)
    }, [status])
    return null
}
