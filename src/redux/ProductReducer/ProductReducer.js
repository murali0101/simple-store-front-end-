import { ADDDATA } from "./ProductAction";

const init = {
  productData: [],
};

export const ProductReducer = (store = init, { type, payload }) => {
    switch (type) {
      case ADDDATA:return {...store,productData:payload}
    default:
      return store;
  }
};
