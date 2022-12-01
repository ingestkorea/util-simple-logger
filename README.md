# @ingestkorea/util-simple-logger

[![npm (scoped)](https://img.shields.io/npm/v/@ingestkorea/util-simple-logger?style=flat-square)](https://www.npmjs.com/package/@ingestkorea/util-simple-logger)
[![NPM downloads](https://img.shields.io/npm/dm/@ingestkorea/util-simple-logger?style=flat-square)](https://www.npmjs.com/package/@ingestkorea/util-simple-logger)

## Description
INGESTKOREA Utility Simple Log Handler for Node.js.

## Installing
```sh
npm install @ingestkorea/util-simple-logger
```

## Getting Started

### Pre-requisites
+ Use TypeScript v4.x

### Import
```ts
// ES5 example
const { simpleLoggerClient } = require('@ingestkorea/util-simple-logger');
```

```ts
// ES6+ example
import { simpleLoggerClient } from '@ingestkorea/util-simple-logger';
```
### Usage

Set Title, Message

```ts
const title = 'Sample Title';
const message = JSON.stringify({
    requestId: "27af36a4af4254bd0106a0e1c49bc513",
    statusCode: 202,
    statusName: "success",
}, null, 2);
```

Async/await
```ts
(async () => {
    const params = {
        title: title, // required
        message: message, // required
        mode: 'KST' // optional
    };
    await simpleLoggerClient.resolve(params);
})();
```

## License
This Utility is distributed under the [MIT License](https://opensource.org/licenses/MIT), see LICENSE for more information.