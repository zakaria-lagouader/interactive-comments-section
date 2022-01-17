import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProvider } from './AppContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <App />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
