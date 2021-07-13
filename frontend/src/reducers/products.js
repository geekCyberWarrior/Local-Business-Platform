import { FETCH_ALL } from '../constants';

const product = (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return products;
  }
};

export default product;
