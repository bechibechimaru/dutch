import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false
        }),
        paths: {
            base: '/dutch'
        }
    },
    preprocess: preprocess(), // TypeScriptサポートを有効にする
};
