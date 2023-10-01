import { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    width?: "50%";
    light?: boolean;
    dark?: boolean;
    label: string;
    options: string[];
    hasError?: boolean;
}
