
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashed = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashed;
}


export const formatNumberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function formatToNaira(amount:number,currency="NGN",fraction=0) {
// Create a new instance of Intl.NumberFormat for Nigerian currency
const formatter = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency,
  minimumFractionDigits: fraction
});

// Format the given amount
return formatter.format(amount);
}

