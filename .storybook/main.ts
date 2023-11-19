import type { StorybookConfig } from '@storybook/nextjs';
import { RuleSetRule } from 'webpack';

const path = require('path');

const config: StorybookConfig = {
	stories: ['../components/**/*.stories.@(tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-styling-webpack',
		{
			name: '@storybook/addon-styling-webpack',

			options: {
				rules: [
					{
						test: /\.css$/,
						sideEffects: true,
						use: [
							require.resolve('style-loader'),
							{
								loader: require.resolve('css-loader'),
								options: {
									importLoaders: 1,
								},
							},
							{
								loader: require.resolve('postcss-loader'),
								options: {
									implementation: require.resolve('postcss'),
								},
							},
						],
					},
				],
			},
		},
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: (config) => {
		const rules = config?.module?.rules as RuleSetRule[];
		const imageRule = rules.find(
			(rule) => rule?.test instanceof RegExp && rule.test.test('.svg')
		);
		if (imageRule) {
			imageRule.exclude = /\.svg$/;
		}
		rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
export default config;
