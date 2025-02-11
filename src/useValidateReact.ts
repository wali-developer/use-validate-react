"use client";

import { Dispatch, SetStateAction, useState } from "react";

// Define types for errors and form payload
type Errors = Record<string, string>;
type Payload = Record<string, string | boolean>;

// Define the function type for validation rules
type ValidationRule = (value: string | boolean) => string | null;

// Validation result type
interface ValidationResult {
  isValid: boolean;
  errors: Errors;
}

// Hook return type
interface UseValidateFormReturn {
  validate: (
    payload: Payload,
    optional?: string[],
    rules?: Record<string, ValidationRule>
  ) => ValidationResult;
  errors: Errors;
  setErrors: Dispatch<SetStateAction<Errors>>;
}

export const useValidateForm = (): UseValidateFormReturn => {
  const [errors, setErrors] = useState<Errors>({});

  const validate = (
    payload: Payload,
    optional: string[] = [],
    rules: Record<string, ValidationRule> = {}
  ): ValidationResult => {
    const err: Errors = {};

    for (const [key, value] of Object.entries(payload)) {
      if (
        (!value || String(value).trim().length === 0) &&
        !optional.includes(key)
      ) {
        err[key] = "This field is required.";
      } else if (rules[key]) {
        const errorMessage = rules[key](value);
        if (errorMessage) err[key] = errorMessage;
      }
    }

    setErrors(err);

    return { isValid: Object.keys(err).length === 0, errors: err };
  };

  return { validate, errors, setErrors };
};
