import { FC } from "react";
import { Select as UiSelect } from "pl1fert-ui-library";

import { SelectProps } from "./select.interfaces";

export const Select: FC<SelectProps> = (props) => <UiSelect {...props} />;
