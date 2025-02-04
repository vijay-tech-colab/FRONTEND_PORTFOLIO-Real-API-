import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './Context/context-provider.jsx'
createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
)
