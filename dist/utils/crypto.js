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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSecureToken = generateSecureToken;
exports.hashString = hashString;
exports.generateCardNumber = generateCardNumber;
exports.generateCVV = generateCVV;
const crypto = __importStar(require("crypto"));
function generateSecureToken(length = 32) {
    return crypto.randomBytes(length).toString('hex');
}
function hashString(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}
function generateCardNumber() {
    const bin = '424242';
    const accountNumber = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    const cardNumberWithoutCheck = bin + accountNumber;
    const checkDigit = calculateLuhnCheckDigit(cardNumberWithoutCheck);
    return cardNumberWithoutCheck + checkDigit;
}
function generateCVV() {
    return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
}
function calculateLuhnCheckDigit(cardNumber) {
    let sum = 0;
    let isEven = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        isEven = !isEven;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit.toString();
}
