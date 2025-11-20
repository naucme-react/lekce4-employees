import type { FunctionComponent } from "react";
import { EmployeeCard } from "../employeeCard/employeeCard.comp";

import styles from './employeeList.module.scss'
import useStore from "../../utils/context/zustandStore";

export const EmployeeList: FunctionComponent = () => {
    const store = useStore();

    return <div className={styles.container}>
        <h1 className={styles.title}>Employee List</h1>
        <input
            className={styles.search}
            type="text"
            placeholder="Filter by name..."
            onInput={(e) => store.setFilterString(e.currentTarget.value)}
        />
        <div className={styles.grid}>
            {store.user?.map((user) => <EmployeeCard key={user.id} user={user} />)}
        </div>
    </div>
}