import { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "@/UI";

const meta: Meta<typeof TextArea> = {
    title: "TextArea",
    component: TextArea,
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            control: {
                type: "text",
            },
        },
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
    },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        placeholder: "Message",
        light: true,
    },
};
