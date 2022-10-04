import ACTIONS from "../constants/actions";

export const openModal = () => ({
    type: ACTIONS.SETTING.MODAL.OPEN,
    payload: true
});

export const closeModal = () => ({
    type: ACTIONS.SETTING.MODAL.OPEN,
    payload: false
});