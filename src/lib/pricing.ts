export const DP_AMOUNT = 20_000_000;

export function getJakartaDate(date = new Date()) {
  return new Date(
    date.toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    })
  );
}

export function getDateDiscount(date = new Date()) {
  const jakartaDate = getJakartaDate(date);
  const day = String(jakartaDate.getDate()).padStart(2, "0");
  const month = String(jakartaDate.getMonth() + 1).padStart(2, "0");
  const year = String(jakartaDate.getFullYear()).slice(-2);

  return Number(`${day}${month}${year}`);
}

export function getFinalPackagePrice(basePrice: number, date = new Date()) {
  const discount = getDateDiscount(date);

  return {
    discount,
    finalPrice: Math.max(basePrice - discount, 0),
  };
}
