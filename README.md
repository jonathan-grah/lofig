# lofig

> [npmjs.com/package/config](https://npmjs.com/package/config) for client side JavaScript

[![Known Vulnerabilities](https://snyk.io//test/github/jonathan-grah/lofig/badge.svg?targetFile=package.json)](https://snyk.io//test/github/jonathan-grah/lofig?targetFile=package.json)

## Installation

`npm install lofig --save --production`

You can also use https://unpkg.com/lofig@latest/dist/lofig.min.js.

## Usage

```js
import 'lofig' from 'lofig'; // not necessary if using CDN Link

// change config folder
lofig.folder = 'config/default.json';

// check if property exists

await lofig.has('secret');
// OR
lofig.has('secret').then(res => {
	if (res) console.log("secret is defined!");
})

// return property

await lofig.get('secret');
// OR
lofig.get('secret').then(secret => {
	if (secret) console.log("secret:", secret);
})

```

See [example](https://github.com/jonathan-grah/lofig/tree/master/example) folder for more details.