import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button'
}

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    args: {
        text: 'Login',
        className: 'py-2 px-4 bg-navy text-white rounded border-0'
    }
};