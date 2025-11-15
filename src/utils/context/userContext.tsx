import { createContext, type Dispatch } from "react";
import type { UserAction, UserState } from "./types";

export type userContextDefault = UserState & {
    dispatch: Dispatch<UserAction>;
}

const noop = (() => {}) as unknown as Dispatch<UserAction>;

const UserContext = createContext<userContextDefault>({
    user: null,
    dispatch: noop,
});

export default UserContext;