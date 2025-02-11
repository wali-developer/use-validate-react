import { Dispatch, SetStateAction } from "react";
type Errors = Record<string, string>;
type Payload = Record<string, string | boolean>;
type ValidationRule = (value: string | boolean) => string | null;
interface ValidationResult {
    isValid: boolean;
    errors: Errors;
}
interface UseValidateFormReturn {
    validate: (payload: Payload, optional?: string[], rules?: Record<string, ValidationRule>) => ValidationResult;
    errors: Errors;
    setErrors: Dispatch<SetStateAction<Errors>>;
}
export declare const useValidateForm: () => UseValidateFormReturn;
export {};
//# sourceMappingURL=useValidateReact.d.ts.map