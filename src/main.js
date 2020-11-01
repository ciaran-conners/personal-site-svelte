import App from './App.svelte';

import { name } from './constants';

const app = new App({
	target: document.body,
	props: {
		name
	}
});

export default app;