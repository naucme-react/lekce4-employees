import type { User } from "../components/employeeCard/employeeCard.comp";

interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

/**
 * Fetches users from the API.
 * 
 * @returns Promise<UsersResponse>
 */
const fetchUsers = async (): Promise<UsersResponse> => {
    const response = await fetch('https://dummyjson.com/users');

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data: UsersResponse = await response.json();

    // sort alphabetically
    data.users.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName)
    });

    return data;
}

export default fetchUsers;