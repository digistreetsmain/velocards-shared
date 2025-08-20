export const API_VERSION = 'v1';
export const DEFAULT_CURRENCY = 'USD';
export const MIN_DEPOSIT_AMOUNT = '10.00';
export const MAX_DEPOSIT_AMOUNT = '10000.00';
export const MIN_CARD_BALANCE = '1.00';
export const MAX_CARD_BALANCE = '5000.00';
export const MAX_CARDS_PER_USER = 10;

export const ERROR_CODES = {
  INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
  INVALID_AMOUNT: 'INVALID_AMOUNT',
  CARD_LIMIT_EXCEEDED: 'CARD_LIMIT_EXCEEDED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  DUPLICATE_REQUEST: 'DUPLICATE_REQUEST'
} as const;

export const REDIS_KEYS = {
  SESSION: (userId: string) => `session:${userId}`,
  LOCK: (resource: string) => `lock:${resource}`,
  IDEMPOTENCY: (key: string) => `idempotency:${key}`,
  RATE_LIMIT: (userId: string) => `rate_limit:${userId}`
} as const;

export * from './events';