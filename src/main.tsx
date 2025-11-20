import { createRoot } from 'react-dom/client'
import { StrictMode, type FunctionComponent, type PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App.tsx'

import './index.css'

const AppWithProviders: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithProviders>
      <App />
    </AppWithProviders>
  </StrictMode>,
)
