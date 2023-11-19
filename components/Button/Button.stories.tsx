import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ChatBubbleIcon from '../../public/icons/ChatBubbleIcon.svg';
import { BarLoader } from 'react-spinners';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		text: 'Login',
		className:
			'py-2 px-4 bg-navy text-white text-base hover:bg-navy/75 rounded border-0',
	},
};

export const Disabled: Story = {
	args: {
		text: 'Login',
		className:
			'py-2 px-4 bg-navy/50 text-white/50 text-base cursor-not-allowed rounded border-0',
	},
};

export const Secondary: Story = {
	args: {
		text: 'Cancel',
		className:
			'py-2 px-4 bg-transparent text-navy text-base hover:underline rounded border-0',
	},
};

export const Small: Story = {
	args: {
		text: 'Login',
		className:
			'py-1 px-2 bg-navy text-white text-sm hover:bg-navy/75 rounded border-0',
	},
};

export const PrimaryIcon: Story = {
	args: {
		text: 'Live Chat',
		className:
			'py-2 px-4 bg-navy text-white text-base hover:bg-navy/75 flex flex-row items-center rounded border-0',
		icon: <ChatBubbleIcon className="w-4 h-4 mr-2 fill-current" />,
	},
};

export const Icon: Story = {
	args: {
		className:
			'py-2 px-2 bg-navy text-white text-base flex flex-row hover:bg-navy/75 items-center rounded border-0',
		icon: <ChatBubbleIcon className="w-4 h-4 fill-current" />,
	},
};

export const SecondaryIcon: Story = {
	args: {
		text: 'Lets Chat',
		className:
			'py-2 px-4 bg-transparent text-navy flex flex-row items-center text-base hover:underline rounded border-0',
		icon: <ChatBubbleIcon className="w-4 h-4 mr-2 fill-current" />,
	},
};

export const Danger: Story = {
	args: {
		text: 'Delete',
		className:
			'py-2 px-4 bg-red-600 text-white text-base hover:bg-red-600/75 rounded border-0',
	},
};

export const Success: Story = {
	args: {
		text: 'Online',
		className:
			'py-2 px-4 bg-green text-white text-base hover:bg-green/75 rounded border-0',
	},
};

export const Loading: Story = {
	args: {
		loader: <BarLoader color="#fff" width={100} height={4} loading={true} />,
		isLoading: true,
		className:
			'py-4 px-4 bg-navy text-white text-base hover:bg-navy/75 rounded border-0',
	},
};
