import { AuthenticatedApp } from 'authenticated-app'

import { useAuth } from 'context/auth-context'
import { UnauthenitcatedApp } from 'screens/unauthenticated-app'
// import TestCustomHooks from 'screens/test'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenitcatedApp />}
    </div>
  )
}

export default App
