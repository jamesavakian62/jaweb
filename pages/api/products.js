import data from '../api/products.json';

export const getProducts = () => {
  return data;
};

export default (req, res) => {
  const products = getProducts();
  res.json(products);
};
