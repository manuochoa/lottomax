import React, { useEffect, useRef, } from 'react'

export const useKey = (key, handler) => {
    const callbackRef = useRef(handler);

    useEffect(() => {
        callbackRef.current = handler;
    });
    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event);
            }
        }
        document.addEventListener("keydown", handle);
        return () => document.removeEventListener("keydown", handle);
    }, [key]);
}