import type { User } from "../components/employeeCard/employeeCard.comp";

/**
 * HOC (Higher-Order Function)
 * Concatenate the user first and last name to filter the whole name
 * 
 * @param User
 * 
 * @returns bool
 */
const ConcatUserFilterCallback = (filterString: string) => {
    return (user: User) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        const fullNameLower = fullName.toLowerCase();
        const searchStringLower = filterString.toLowerCase();
        return fullNameLower.includes(searchStringLower);
    }
}

export default ConcatUserFilterCallback;