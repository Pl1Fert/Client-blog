import { Meta, StoryObj } from "@storybook/react";

import { ButtonBackgroundColor } from "@/constants";
import { Button } from "@/UI";

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text",
        },
        backgroundColor: {
            options: [ButtonBackgroundColor.YELLOW, ButtonBackgroundColor.WHITE],
            control: { type: "radio" },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
        backgroundColor: ButtonBackgroundColor.YELLOW,
    },
};
