export const formatPriceVnd = (price) => {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
};
