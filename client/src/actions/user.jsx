import ACTIONS from "../constants/actions/user";

export const storeUser = (payload) => ({
    type: ACTIONS.USER,
    payload
});