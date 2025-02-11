# 📖 use-validate-react Documentation

# 📝 Overview

use-validate-react is a lightweight and flexible React hook that simplifies form validation. It supports both default and custom validation rules for easy form handling.

## 📦 Installation

Install the package using npm or yarn:

```sh
npm install use-validate-react
```

OR

```sh
yarn add use-validate-react
```

# 🚀 Usage Guide

# 🔹 Basic Example (JavaScript)

```sh
import { useValidateForm } from "use-validate-react";
import React, { useState } from "react";

const MyForm = () => {
const { validate, errors } = useValidateForm();
const [formData, setFormData] = useState({ email: "", password: "" });

    # Validation rules are optional, by default validation error will be This field is required but you can add your own validation rules like below.

    const handleSubmit = () => {
        const result = validate(formData, [], {
            email: (value) => (!/\S+@\S+\.\S+/.test(value) ? "Invalid email format" : null),
            password: (value) => (value.length < 6 ? "Password must be at least 6 characters" : null),
        });

        if (result.isValid) {
            console.log("Form is valid, submitting...");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p>{errors.email}</p>}

            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p>{errors.password}</p>}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

};

export default MyForm;
```

# 🔹 TypeScript Example

```sh
import { useValidateForm } from "use-validate-react";
import React, { useState } from "react";

interface FormData {
email: string;
password: string;
}

const MyForm: React.FC = () => {
const { validate, errors } = useValidateForm();
const [formData, setFormData] = useState<FormData>({ email: "", password: "" });

    const handleSubmit = () => {
        const result = validate(formData, [], {
            email: (value) => (!/\S+@\S+\.\S+/.test(value) ? "Invalid email format" : null),
            password: (value) => (value.length < 6 ? "Password must be at least 6 characters" : null),
        });

        if (result.isValid) {
            console.log("Form is valid, submitting...");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p>{errors.email}</p>}

            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p>{errors.password}</p>}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

};

export default MyForm;
```

# 📌 API Reference

1️⃣ useValidateForm()

Returns an object containing: - validate(formData, requiredFields, customRules) - Validates formData based on default or custom validation rules. - Returns { isValid: boolean, errors: Record<string, string> } - errors: An object storing validation error messages.

# Example of Custom Validation

```sh
const validationRules = {
    email: (value) => (!/\S+@\S+\.\S+/.test(value) ? "Invalid email format" : null),
    password: (value) => (value.length < 8 ? "Must be at least 8 characters" : null),
};
const result = validate(formData, [], validationRules);
```

🎯 Features

✔ Lightweight & Easy to Use
✔ Supports Custom Validation Rules
✔ TypeScript Compatible
✔ Handles Multiple Fields Automatically
✔ Works with Controlled Components

📜 License
This project is MIT Licensed.

📞 Need Help?
If you find an issue or have suggestions, feel free to open an issue.

Happy coding! 🚀
