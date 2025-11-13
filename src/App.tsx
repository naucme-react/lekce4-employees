import { useEffect, useState } from 'react';
import './App.css'
import type { User } from './components/employeeCard/employeeCard.comp';
import { EmployeeList } from './components/employeeList/employeeList.comp'
import { useQuery } from '@tanstack/react-query';
import fetchUsers from './utils/users.api';

function App() {
  const [employees, setEmployees] = useState<User[]>([]);
  const [filterString, setFilterString] = useState<string>("");

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  useEffect(() => {
    if (data) {
      const filteredEmployees = filterString.length > 0 ?
        data.users.filter(user => user.firstName.includes(filterString)) : data.users;

      setEmployees(filteredEmployees);
    }
  }, [data, filterString])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  return <EmployeeList employees={employees} setFilter={setFilterString} />
}

export default App
