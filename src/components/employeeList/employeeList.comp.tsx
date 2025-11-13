import type { FunctionComponent } from "react";
import { EmployeeCard, type User } from "../employeeCard/employeeCard.comp";

import styles from './employeeList.module.scss'

type EmployeeListProps = {
    employees: User[];
};

export const EmployeeList: FunctionComponent<EmployeeListProps> = ({ employees }) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>Employee List</h1>
        <input className={styles.search} type="text" placeholder="Filter by name..." />
        <div className={styles.grid}>
            {employees.map((user) => <EmployeeCard key={user.id} user={user} />)}
        </div>
    </div>
}