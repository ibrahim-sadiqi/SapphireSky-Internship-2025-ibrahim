// Discount System Based on Membership
//      Input membership type ("Gold", "Silver", "Bronze").
//      Use switch to apply different discount rates on a purchase.

function discountType(type) {
  switch (type) {
    case "Gold":
      return 0.5;
    case "Silver":
      return 0.3;
    case "Bronze":
      return 0.15;
    default:
      return "Invalid!";
  }
}

function getPriceAfterDiscount(firstPrice, type) {
  return (firstPrice -= firstPrice * discountType(type));
}

const firstPrice = 10000;
console.log(getPriceAfterDiscount(firstPrice, "Bronze"));
