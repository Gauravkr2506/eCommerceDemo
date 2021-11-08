export const ActionTypes = {
  UPDATE_ROOT_REDUCER_DATA: "UPDATE_ROOT_REDUCER_DATA",
};

export const updateRootReducer = (payload: any) => ({
  type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
  payload,
});

interface actionInterface {
  type: string;
  payload: any;
}

type dispatchType = (action: actionInterface) => any;

interface ProductListData {
  products: Array<any>;
}

export const getProductListAction = () => (dispatch: dispatchType) => {
  debugger;
  return fetch("https://test.ejam.com/api/recruitment/frontendtask1/products")
    .then((response: any) => {
      return response.json();
    })
    .then((data: ProductListData) => {
      dispatch({
        type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
        payload: {
          productList: data.products,
        },
      });

      console.log(data);
      return data;
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const toggleAddRemoveProductToCartAction =
  (product: any) => (dispatch: any, getState: any) => {
    debugger;
    const productInCart = [...getState().productInCart];

    if (product.addedInCart) {
      let index = productInCart.findIndex((obj: any) => obj.id === product.id);
      productInCart.splice(index, 1);
    } else {
      productInCart.push(product);
    }
    dispatch({
      type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
      payload: {
        productInCart,
      },
    });
  };
