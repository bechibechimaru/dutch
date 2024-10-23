import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { config } from 'typescript-eslint';

const dev = process.argv.includes('dev');

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false
        }),
        paths: {
            base: dev ? '' : '/dutch'
        }
    },
    preprocess: preprocess(), // TypeScriptサポートを有効にする
};