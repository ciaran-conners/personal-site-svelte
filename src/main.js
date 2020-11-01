import App from './components/App.svelte';

import { name } from './lib/constants';

const app = new App({
	target: document.body,
	props: {
		name
	}
});

export default app;