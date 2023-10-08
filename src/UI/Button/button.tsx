"use client";

import { FC } from "react";
import { Button as UiButton } from "pl1fert-ui-library";

import { ButtonProps } from "./button.interfaces";

export const Button: FC<ButtonProps> = (props) => <UiButton {...props} />;
