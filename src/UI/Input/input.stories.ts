import { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/UI";

const meta: Meta<typeof Input> = {
    title: "Button",
    component: Input,
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
