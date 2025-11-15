import type { UserAction, UserState } from "./types";
import { USER_ACTIONS } from "./types";

type UserReducer = (state: UserState, action: UserAction) => UserState;

const userReducer: UserReducer = (state, action) => {
    switch (action.type) {
        case USER_ACTIONS.LOGIN:
            return { ...state, user: action.payload };
        case USER_ACTIONS.LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default userReducer;