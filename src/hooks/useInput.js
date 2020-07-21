import {useState} from 'react'

/*
** Custom hook that takes in user input
*/

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    // Binds to element to retrieve value from input element
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    }
}
