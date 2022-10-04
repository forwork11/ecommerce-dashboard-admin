import ACTIONS from "../constants/actions";
import SETTING from "../constants/states/Setting";

const Setting = (state=SETTING, action) => {
    switch (action.type) {
        case ACTIONS.SETTING.MODAL.OPEN:
            return {
                ...state,
                modalOpen: action.payload
            };
        default:
            return state;
    }
};

export default Setting;