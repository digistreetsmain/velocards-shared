import Decimal from 'decimal.js';

export function parseAmount(amount: string): Decimal {
  return new Decimal(amount);
}

export function formatAmount(amount: string | Decimal): string {
  const decimal = amount instanceof Decimal ? amount : new Decimal(amount);
  return decimal.toFixed(2);
}

export function addAmounts(a: string, b: string): string {
  return formatAmount(parseAmount(a).plus(parseAmount(b)));
}

export function subtractAmounts(a: string, b: string): string {
  return formatAmount(parseAmount(a).minus(parseAmount(b)));
}

export function isValidAmount(amount: string): boolean {
  try {
    const decimal = parseAmount(amount);
    return decimal.isPositive() && decimal.decimalPlaces() <= 2;
  } catch {
    return false;
  }
}

export function compareAmounts(a: string, b: string): number {
  const decimalA = parseAmount(a);
  const decimalB = parseAmount(b);
  return decimalA.comparedTo(decimalB);
}