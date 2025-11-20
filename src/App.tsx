import { useEffect, useState, type FunctionComponent, type PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ClipLoader } from "react-spinners";

import type { User } from './components/employeeCard/employeeCard.comp';
import { EmployeeList } from './components/employeeList/employeeList.comp'
import fetchUsers from './utils/users.api';
import ConcatUserFilterCallback from './utils/users.utils';

import './App.css'
import useStore from './utils/context/zustandStore';

const CenteredDiv: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    {children}
  </div>
)

function App() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  const store = useStore();

  useEffect(() => {
    if (data) {
      const filteredEmployees = store.filterString.length > 0 ?
        data.users.filter(ConcatUserFilterCallback(store.filterString)) : data.users;

      store.setUser(filteredEmployees);
    }
  }, [data, store.filterString])

  if (isLoading) {
    return <CenteredDiv>
      <ClipLoader size={42} />
    </CenteredDiv>;
  }

  if (isError) {
    return <CenteredDiv>Error: {error instanceof Error ? error.message : 'Unknown error'}</CenteredDiv>;
  }

  return <>
    <EmployeeList />
  </>
}

export default App
