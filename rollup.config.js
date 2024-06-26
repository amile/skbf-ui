import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import fs from "fs-extra";

const packageJson = JSON.parse(
    fs.readFileSync('./package.json', { encoding: 'utf-8' })
);

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
            useTsconfigDeclarationDir: true
        }),
        terser(),
    ],
    external: ['react', '@emotion/react', '@emotion/styled'],
};