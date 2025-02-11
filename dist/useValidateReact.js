"use client";
import { useState } from "react";
export const useValidateForm = () => {
    const [errors, setErrors] = useState({});
    const validate = (payload, optional = [], rules = {}) => {
        const err = {};
        for (const [key, value] of Object.entries(payload)) {
            if ((!value || String(value).trim().length === 0) &&
                !optional.includes(key)) {
                err[key] = "This field is required.";
            }
            else if (rules[key]) {
                const errorMessage = rules[key](value);
                if (errorMessage)
                    err[key] = errorMessage;
            }
        }
        setErrors(err);
        return { isValid: Object.keys(err).length === 0, errors: err };
    };
    return { validate, errors, setErrors };
};
