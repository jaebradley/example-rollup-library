# `example-rollup-library`

[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/example-rollup-library.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jaebradley/example-rollup-library.svg?branch=master)](https://travis-ci.org/jaebradley/example-rollup-library)
[![Codecov](https://img.shields.io/codecov/c/github/jaebradley/example-rollup-library.svg)](https://codecov.io/gh/jaebradley/example-rollup-library)
[![npm](https://img.shields.io/npm/dt/@jaebradley/example-rollup-library.svg)](github-https://www.npmjs.com/package/@jaebradley/example-rollup-library-client)
[![npm](https://img.shields.io/npm/v/@jaebradley/example-rollup-library.svg)](https://www.npmjs.com/package/@jaebradley/example-rollup-library)

Example `rollup.js` library.

## Install

```bash
npm install @jaebradley/example-rollup-library
```

## API

Since this is an example library, there are three exported methods; `a`, `b`, and `c`. All they do is `console.log` `"a"`, `"b"`, and `"c"`, respectively.

## Usage

```javascript
import {
  a,
  b,
  c,
} from '@jaebradley/example-rollup-library';

a(); // console logs "a"
b(); // console logs "b"
c(); // you bet
```

Can also import like

```javascript
import a from '@jaebradley/example-rollup-library/a';
import b from '@jaebradley/example-rollup-library/b';
import c from '@jaebradley/example-rollup-library/c';

a();
b();
c();
```

