import { Meta, StoryObj } from "@storybook/react";

import { Select } from "@/UI";

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        width: {
            options: ["50%", undefined],
            control: { type: "radio" },
        },
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
        label: {
            control: {
                type: "text",
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: "Select",
        options: ["option 1", "option 2", "option 3"],
        light: true,
    },
};
