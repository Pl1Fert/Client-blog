import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: "50%";
    light?: boolean;
    dark?: boolean;
    hasError?: boolean;
}
