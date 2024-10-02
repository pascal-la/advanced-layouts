export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [6,3];

export const dictionary = {
		"/(app)": [7,[2]],
		"/(dashboard)/admin": [~12,[5]],
		"/hooks": [~13,[6]],
		"/(app)/quotes/(quote)": [8,[2,3]],
		"/(app)/quotes/(quote)/id/[quoteId]": [~9,[2]],
		"/(app)/quotes/(tags)/tags": [~10,[4]],
		"/(app)/quotes/(tags)/tags/[tag]": [~11,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';