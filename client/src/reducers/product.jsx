import ACTIONS from "../constants/actions/product";
import PRODUCT from "../constants/states/product";

const product = (state=PRODUCT, action) => {
    switch (action.type) {
        case ACTIONS.PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case ACTIONS.MODAL.FIELDS:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    fields: action.payload
                }
            };
        case ACTIONS.MODAL.OPEN:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    open: action.payload
                }
            };
        case ACTIONS.MODAL.EDIT:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    edit: action.payload
                }
            };
        default:
            return state;
    }
};

export default product;