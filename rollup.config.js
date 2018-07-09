import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import {
  terser,
} from 'rollup-plugin-terser';

const plugins = [
  globals(),
  builtins(),
  babel({ exclude: 'node_modules/**' }),
  localResolve(),
  resolve({
    module: true,
    jsnext: true,
    main: true,
    preferBuiltins: true,
    browser: true,
    modulesOnly: true,
  }),
  terser(),
  commonjs(),
  filesize(),
];

const createConfig = filename => ({
  input: `src/${filename}.js`,
  output: [
    {
      file: `build/${filename}.js`,
      format: 'umd',
      name: 'example-rollup-library',
    },
    {
      file: `build/${filename}.cjs.js`,
      format: 'cjs',
      name: 'example-rollup-library',
    },
    {
      file: `build/${filename}.esm.js`,
      format: 'es',
    },
  ],
  plugins,
});

const configs = [
  'index',
  'a',
  'b',
  'c',
].map(filename => createConfig(filename));

export default configs;
