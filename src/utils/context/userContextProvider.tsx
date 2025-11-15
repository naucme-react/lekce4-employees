import { useReducer, type ReactNode } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';

type Props = {
    children: ReactNode;
};

const UserProvider = ({ children }: Props) => {
        const [state, dispatch] = useReducer(userReducer, { user: null });

    return (
        <UserContext.Provider value={{ user: state.user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;