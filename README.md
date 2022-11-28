# @ingestkorea/util-simple-logger

## Description
INGESTKOREA Util Simple Log Handler for Node.js.

## Installing
```sh
npm install @ingestkorea/util-simple-logger
```

## Getting Started
### Import
```typescript
// ES5 example
const { simpleLoggerClient } = require('@ingestkorea/util-simple-logger');
```

```typescript
// ES6+ example
import { simpleLoggerClient } from '@ingestkorea/util-simple-logger';
```
### Usage

Set Title, Message

```typescript
const title = 'Sample Title';
const message = JSON.stringify({
    requestId: "27af36a4af4254bd0106a0e1c49bc513",
    statusCode: 202,
    statusName: "success",
}, null, 2);
```

Async/await
```typescript
(async () => {
    const params = {
        title: title, // required
        message: message, // required
        mode: 'KST' // optional
    };
    await simpleLoggerClient.resolve(params);
})();
```