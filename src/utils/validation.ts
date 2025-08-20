export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidCardNumber(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  return /^\d{16}$/.test(cleaned);
}

export function isValidCVV(cvv: string): boolean {
  return /^\d{3,4}$/.test(cvv);
}

export function isValidExpiry(month: number, year: number): boolean {
  if (month < 1 || month > 12) return false;
  
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  
  if (year < currentYear) return false;
  if (year === currentYear && month < currentMonth) return false;
  
  return true;
}

export function maskCardNumber(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (cleaned.length !== 16) return cardNumber;
  return `****${cleaned.slice(-4)}`;
}

export function generateIdempotencyKey(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}