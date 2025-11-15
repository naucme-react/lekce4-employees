import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { ClipLoader } from "react-spinners";

import type { User } from './components/employeeCard/employeeCard.comp';
import { EmployeeList } from './components/employeeList/employeeList.comp'
import fetchUsers from './utils/users.api';
import ConcatUserFilterCallback from './utils/users.utils';

import './App.css'

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
        data.users.filter(ConcatUserFilterCallback(filterString)) : data.users;

      setEmployees(filteredEmployees);
    }
  }, [data, filterString])

  const CenteredContainer = styled.div`
    display: flex;
    background-color: ${isLoading ? '#f0f0f0' : 'transparent'};
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;

  if (isLoading) {
    return <CenteredContainer>
      <ClipLoader size={42} />
    </CenteredContainer>;
  }

  if (isError) {
    return <CenteredContainer>Error: {error instanceof Error ? error.message : 'Unknown error'}</CenteredContainer>;
  }

  return <EmployeeList employees={employees} setFilter={setFilterString} />
}

export default App
