import ACTIONS from "../constants/actions/user";
import USER from "../constants/states/user";

const user = (state=USER, action) => {
    switch (action.type) {
        case ACTIONS.USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default user;