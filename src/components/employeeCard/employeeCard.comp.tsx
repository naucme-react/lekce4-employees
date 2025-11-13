import type { FunctionComponent } from "react";

import styles from './employeeCard.module.scss';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image: string;
    company: {
        name: string;
        title: string;
    };
};

export type EmployeeCardProps = {
    user: User;
};

export const EmployeeCard: FunctionComponent<EmployeeCardProps> = ({ user }) => {
    const { firstName, lastName, company } = user;
    const fullName = `${firstName} ${lastName}`;
    const robohashUrl = `https://robohash.org/${encodeURIComponent(fullName)}`

    return <div className={styles.card}>
        <img
            src={robohashUrl}
            alt={`Avatar for ${fullName}`}
            className={styles.avatar}
        />
        <h3 className={styles.name}>
            {fullName}
        </h3>
        <p className={styles.title}>
            {company.title}
        </p>
    </div>
}