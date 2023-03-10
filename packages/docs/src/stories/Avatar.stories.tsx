import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@gabriel1tba-ui/react';

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/gabriel1tba.png',
		alt: 'Gabriel Ferreira',
	},
	argTypes: {
		src: {
			control: {
				type: 'text',
			},
		},
	},
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
};
