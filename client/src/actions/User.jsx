import ACTIONS from "../constants/actions";

export const storeUser = (payload) => ({
    type: ACTIONS.USER,
    payload
});