/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import * as path from "path";

export default defineConfig({
    plugins: [svelte({hot: !process.env.VITEST})],
    test: {
        include: ['test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        globals: true,
        environment: 'jsdom',
    },
    resolve: {
        alias: {
            $app: path.resolve('./.svelte-kit/dev/runtime/app')
        }
    }
})
