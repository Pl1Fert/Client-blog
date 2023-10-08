import { FC } from "react";
import { TextArea as UiTextArea } from "pl1fert-ui-library";

import { TextAreaProps } from "./textArea.interfaces";

export const TextArea: FC<TextAreaProps> = (props) => <UiTextArea {...props} />;
