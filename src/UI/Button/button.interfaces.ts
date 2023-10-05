import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    yellow?: boolean;
    white?: boolean;
    width?: "50%";
}
