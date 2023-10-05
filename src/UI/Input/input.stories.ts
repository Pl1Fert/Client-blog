import { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/UI";

const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        dark: {
            control: {
                type: "boolean",
            },
        },
        light: {
            control: {
                type: "boolean",
            },
        },
        placeholder: {
            control: "text",
        },
        width: {
            options: ["50%", undefined],
            control: { type: "radio" },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        light: true,
        placeholder: "Enter a message",
    },
};
