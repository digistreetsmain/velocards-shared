# VeloCards Shared

Shared TypeScript types, interfaces, and utilities for the VeloCards platform.

## Installation

```bash
npm install @velocards/shared
```

## Structure

```
src/
├── types/          # TypeScript interfaces and types
│   ├── auth.ts     # Authentication types
│   ├── card.ts     # Virtual card types
│   ├── transaction.ts # Transaction types
│   ├── user.ts     # User types
│   ├── events.ts   # Event sourcing types
│   └── common.ts   # Common/shared types
├── utils/          # Utility functions
│   ├── crypto.ts   # Cryptography utilities
│   ├── money.ts    # Money/decimal handling
│   └── validation.ts # Validation utilities
└── constants/      # Shared constants
    └── events.ts   # Event type constants
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Type check
npm run type-check
```

## Usage

```typescript
import { User, Card, Transaction } from '@velocards/shared';
import { formatMoney, validateEmail } from '@velocards/shared/utils';
```