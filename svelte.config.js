import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
        }),
        paths: {
            base: dev ? '' : '/dutch',
        },
    },
    preprocess: preprocess(), // TypeScriptサポートを有効にする
};
