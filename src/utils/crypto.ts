import * as crypto from 'crypto';

export function generateSecureToken(length: number = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

export function hashString(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

export function generateCardNumber(): string {
  const bin = '424242';
  const accountNumber = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  const cardNumberWithoutCheck = bin + accountNumber;
  
  const checkDigit = calculateLuhnCheckDigit(cardNumberWithoutCheck);
  return cardNumberWithoutCheck + checkDigit;
}

export function generateCVV(): string {
  return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
}

function calculateLuhnCheckDigit(cardNumber: string): string {
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