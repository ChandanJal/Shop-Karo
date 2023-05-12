export function formateNumber(number) {
  return new Intl.NumberFormat("en-IN").format(number);
}

export function formateCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  }).format(number);
}
