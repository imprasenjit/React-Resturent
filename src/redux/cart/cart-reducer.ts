const INITIAL_STATE = {
  products: [] as any,
};
const cartReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_PRODUCT":
      //console.log("action:payload"+action.payload.product_id)
      let newArr = [];
      //console.log(state.products.length);
      if (state.products.length > 0) {
        newArr = state.products.filter((val: any) => {
          return val.product_id !== action.payload.product_id;
        });
        newArr.push(action.payload);
      } else {
        newArr.push(action.payload);
      }
      //console.log(newArr);
      return {
        ...state,
        products: newArr,
      };
    case "REMOVE_PRODUCT":
      if (state.products.length > 0) {
        let newArr = [];
        newArr = state.products.filter((val: any) => {
          return val.product_id !== action.payload;
        });
        return {
          ...state,
          products: newArr,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
export default cartReducer;
