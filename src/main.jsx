import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './Context/context-provider.jsx'
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)
