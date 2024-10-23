import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { config } from 'typescript-eslint';

const dev = process.env.NODE_ENV === 'development';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false
        }),
        paths: {
            base: dev ? '' : '/dutch',
            assets: dev ? '' : '/dutch' 
        }
    },
    preprocess: preprocess(), // TypeScriptサポートを有効にする
};