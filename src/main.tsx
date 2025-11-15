import { createRoot } from 'react-dom/client'
import { StrictMode, type FunctionComponent, type PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import UserProvider from './utils/context/userContextProvider.tsx'
import App from './App.tsx'

import './index.css'

const AppWithProviders: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>
    <UserProvider>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
    </UserProvider>
  </QueryClientProvider>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithProviders>
      <App />
    </AppWithProviders>
  </StrictMode>,
)
