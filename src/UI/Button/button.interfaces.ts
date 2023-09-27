import { ButtonHTMLAttributes } from "react";

import { ButtonBackgroundColor } from "@/constants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: ButtonBackgroundColor;
}
