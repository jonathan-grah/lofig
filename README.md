# lofig

> [npmjs.com/package/config](https://npmjs.com/package/config) for client side JavaScript

## Installation

`npm install lofig --save --production`

You can also use https://unpkg.com/lofig@latest/dist/lofig.min.js.

## Usage

```js
import 'lofig' from 'lofig'; // not necessary if using CDN Link
// change config folder
lofig.folder = 'config/default.json';
// check if property exists
lofig.has('secret', res => {});
// return property
lofig.get('secret', res => {});
```

See [example](https://github.com/atjonathan/lofig/tree/master/example) folder for more details.