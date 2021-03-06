import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			define: {
				'process.env': process.env,
			},
		}
	},
	experimental: {
    useVitePreprocess: true
  }
};

export default config;
