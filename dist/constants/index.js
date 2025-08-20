"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_KEYS = exports.ERROR_CODES = exports.MAX_CARDS_PER_USER = exports.MAX_CARD_BALANCE = exports.MIN_CARD_BALANCE = exports.MAX_DEPOSIT_AMOUNT = exports.MIN_DEPOSIT_AMOUNT = exports.DEFAULT_CURRENCY = exports.API_VERSION = void 0;
exports.API_VERSION = 'v1';
exports.DEFAULT_CURRENCY = 'USD';
exports.MIN_DEPOSIT_AMOUNT = '10.00';
exports.MAX_DEPOSIT_AMOUNT = '10000.00';
exports.MIN_CARD_BALANCE = '1.00';
exports.MAX_CARD_BALANCE = '5000.00';
exports.MAX_CARDS_PER_USER = 10;
exports.ERROR_CODES = {
    INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
    INVALID_AMOUNT: 'INVALID_AMOUNT',
    CARD_LIMIT_EXCEEDED: 'CARD_LIMIT_EXCEEDED',
    UNAUTHORIZED: 'UNAUTHORIZED',
    FORBIDDEN: 'FORBIDDEN',
    NOT_FOUND: 'NOT_FOUND',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    DUPLICATE_REQUEST: 'DUPLICATE_REQUEST'
};
exports.REDIS_KEYS = {
    SESSION: (userId) => `session:${userId}`,
    LOCK: (resource) => `lock:${resource}`,
    IDEMPOTENCY: (key) => `idempotency:${key}`,
    RATE_LIMIT: (userId) => `rate_limit:${userId}`
};
__exportStar(require("./events"), exports);
