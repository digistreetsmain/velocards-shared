"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = isValidEmail;
exports.isValidCardNumber = isValidCardNumber;
exports.isValidCVV = isValidCVV;
exports.isValidExpiry = isValidExpiry;
exports.maskCardNumber = maskCardNumber;
exports.generateIdempotencyKey = generateIdempotencyKey;
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidCardNumber(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    return /^\d{16}$/.test(cleaned);
}
function isValidCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}
function isValidExpiry(month, year) {
    if (month < 1 || month > 12)
        return false;
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    if (year < currentYear)
        return false;
    if (year === currentYear && month < currentMonth)
        return false;
    return true;
}
function maskCardNumber(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    if (cleaned.length !== 16)
        return cardNumber;
    return `****${cleaned.slice(-4)}`;
}
function generateIdempotencyKey() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
