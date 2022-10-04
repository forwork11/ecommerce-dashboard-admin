import ACTIONS from "../constants/actions";

export const storeAuth = (payload) => ({
    type: ACTIONS.USER.AUTH,
    payload
});