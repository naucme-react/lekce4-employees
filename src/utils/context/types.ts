import type { User } from "../../components/employeeCard/employeeCard.comp";

export const USER_ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
} as const;

export type UserAction = {
    type: typeof USER_ACTIONS[keyof typeof USER_ACTIONS];
    payload: User | null;
};

export type UserState = {
    user: User | null;
};
