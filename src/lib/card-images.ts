
const CDN_BASE = "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/pocket";

export function getCardImageUrl(setCode: string, cardNumber: number): string {
  const paddedNumber = String(cardNumber).padStart(3, "0");
  return `${CDN_BASE}/${setCode}/${setCode}_${paddedNumber}_EN_SM.webp`;
}

export function getExpansionLogoUrl(setCode: string): string {
  return `https://s3.limitlesstcg.com/pocket/sets/${setCode}.webp`;
}
