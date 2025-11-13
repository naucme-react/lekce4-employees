import type { FunctionComponent } from "react";
import { EmployeeCard, type User } from "../employeeCard/employeeCard.comp";

import styles from './employeeList.module.scss'

type EmployeeListProps = {
    employees: User[];
    setFilter: (filter: string) => void;
};

export const EmployeeList: FunctionComponent<EmployeeListProps> = ({ employees, setFilter }) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>Employee List</h1>
        <input
            className={styles.search}
            type="text"
            placeholder="Filter by name..."
            onInput={(e) => setFilter(e.currentTarget.value)}
        />
        <div className={styles.grid}>
            {employees.map((user) => <EmployeeCard key={user.id} user={user} />)}
        </div>
    </div>
}