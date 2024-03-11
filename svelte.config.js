// svelte.config.js
import adapter from 'sveltekit-adapter-html-like';

export default {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		})
	}
};