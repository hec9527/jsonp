import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default defineConfig({
    input: './src/index.ts',

    plugins: [typescript(), terser()],

    output: [
        {
            file: './dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: './dist/index.es.js',
            sourcemap: true,
            format: 'es',
        },
        {
            file: './dist/index.iife.js',
            sourcemap: true,
            format: 'iife',
            name: 'jsonp',
        },
        {
            file: './dist/index.umd.js',
            sourcemap: true,
            format: 'umd',
            name: 'jsonp',
        },
    ],
});
