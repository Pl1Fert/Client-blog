import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/UI";

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        width: {
            options: ["50%", undefined],
            control: { type: "radio" },
        },
        yellow: {
            control: {
                type: "boolean",
            },
        },
        white: {
            control: {
                type: "boolean",
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
        yellow: true,
    },
};
