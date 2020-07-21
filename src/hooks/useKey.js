import {useEffect, useRef} from 'react'

/*
** Custom hook to handle keyboard arrow button press
*/
export const useKey = (key, cb) => {
    const callbackRef = useRef(cb);

    // Cleanup
    useEffect(() => {
        callbackRef.current = cb;
    });

    // If desired key is pressed, logic will be fulfilled
    useEffect(() => {
        function handle(event) {
            if (event.which === key) {
                callbackRef.current(event);
            }
        }
        document.addEventListener("keydown", handle);
        return () => document.removeEventListener("keypress", handle);
    }, [key]);
}

