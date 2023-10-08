"use client";

import { FC } from "react";
import { Input as UiInput } from "pl1fert-ui-library";

import { InputProps } from "./input.interfaces";

export const Input: FC<InputProps> = (props) => <UiInput {...props} />;
