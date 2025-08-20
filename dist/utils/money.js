"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAmount = parseAmount;
exports.formatAmount = formatAmount;
exports.addAmounts = addAmounts;
exports.subtractAmounts = subtractAmounts;
exports.isValidAmount = isValidAmount;
exports.compareAmounts = compareAmounts;
const decimal_js_1 = __importDefault(require("decimal.js"));
function parseAmount(amount) {
    return new decimal_js_1.default(amount);
}
function formatAmount(amount) {
    const decimal = amount instanceof decimal_js_1.default ? amount : new decimal_js_1.default(amount);
    return decimal.toFixed(2);
}
function addAmounts(a, b) {
    return formatAmount(parseAmount(a).plus(parseAmount(b)));
}
function subtractAmounts(a, b) {
    return formatAmount(parseAmount(a).minus(parseAmount(b)));
}
function isValidAmount(amount) {
    try {
        const decimal = parseAmount(amount);
        return decimal.isPositive() && decimal.decimalPlaces() <= 2;
    }
    catch {
        return false;
    }
}
function compareAmounts(a, b) {
    const decimalA = parseAmount(a);
    const decimalB = parseAmount(b);
    return decimalA.comparedTo(decimalB);
}
