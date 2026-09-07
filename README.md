# dvelop-smartinvoice-types

TypeScript types and OpenAPI-enabled Zod schemas for d.velop smart invoice payloads.

## Installation

```bash
npm install @ppls/dvelop-smartinvoice-types zod
```

## Usage

```ts
import { transferSchema, type Transfer } from "dvelop-smartinvoice-types";

const parsed: Transfer = transferSchema.parse(payload);
```

## Development

- `npm run check` validates TypeScript.
- `npm run build` creates the package in `dist/`.
