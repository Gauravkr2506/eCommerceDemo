import { toast } from "react-toastify";
export const ActionTypes = {
  UPDATE_ROOT_REDUCER_DATA: "UPDATE_ROOT_REDUCER_DATA",
};

export const updateRootReducer = (payload: any) => ({
  type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
  payload,
});

export const closeCartPopup = () => ({
  type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
  payload: { isModalOpen: false },
});
export const openCartPopup = () => ({
  type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
  payload: { isModalOpen: true },
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

      // console.log(data);
      return data;
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const toggleAddRemoveProductToCartAction =
  (product: any) => (dispatch: any, getState: any) => {
    const productInCart = [...getState().productInCart];
    if (product.addedInCart) {
      let index = productInCart.findIndex((obj: any) => obj.id === product.id);
      productInCart.splice(index, 1);

      dispatch({
        type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
        payload: {
          productInCart,
        },
      });
    } else {
      productInCart.push({ ...product, quantity: 1 });
      dispatch({
        type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
        payload: {
          productInCart,
          isModalOpen: true,
        },
      });
    }
  };

export const changeQuantity =
  (id: number, quantity: number) => (dispatch: any, getState: any) => {
    const productInCart = [...getState().productInCart];
    let index = productInCart.findIndex((obj: any) => obj.id === id);
    productInCart[index] = { ...productInCart[index], quantity };
    dispatch({
      type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
      payload: {
        productInCart,
      },
    });
  };

export const submitShippingFormData =
  (data: any) => (dispatch: dispatchType) => {
    return fetch("https://test.ejam.com/api/recruitment/frontendtask1/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response: any) => {
        return response.json();
      })
      .then((data: any) => {
        toast.success("Order placed successfully");
        dispatch({
          type: ActionTypes.UPDATE_ROOT_REDUCER_DATA,
          payload: {
            productInCart: [],
          },
        });
        // console.log(data);
        return data;
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
