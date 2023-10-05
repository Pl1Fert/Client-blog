import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    width?: "50%";
    light?: boolean;
    dark?: boolean;
    hasError?: boolean;
}
