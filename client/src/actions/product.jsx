import ACTIONS from "../constants/actions/product";

export const storeProducts = (payload) => ({
    type: ACTIONS.PRODUCTS,
    payload
})

export const modalFields = (payload) => ({
    type: ACTIONS.MODAL.FIELDS,
    payload
});

export const modalOpen = () => ({
    type: ACTIONS.MODAL.OPEN,
    payload: true
});

export const modalClose = () => ({
    type: ACTIONS.MODAL.OPEN,
    payload: false
});

export const modalEdit = () => ({
    type: ACTIONS.MODAL.EDIT,
    payload: true
});

export const modalCreate = () => ({
    type: ACTIONS.MODAL.EDIT,
    payload: false
});