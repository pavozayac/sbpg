import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '@/components/Button';

const meta: Meta<typeof Button> = {
    title: 'MyButton',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BlueSmallButton: Story = {
    args: {
        color: 'bg-blue-800',
        size: 'size-16',
        text: 'Example text',
    },
    render: ({ color, size, text }: ButtonProps) => {
        return <Button color={color} size={size} text={text} />
    }
};
