import { StrictMode, type FunctionComponent, type PropsWithChildren } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
