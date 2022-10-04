import ACTIONS from "../constants/actions";
import USER from "../constants/states/User";

const User = (state=USER, action) => {
    switch (action.type) {
        case ACTIONS.USER.AUTH:
            return {
                ...state,
                auth: action.payload
            };
        default:
            return state;
    }
};

export default User;