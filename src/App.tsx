import { useEffect } from 'react'
import { usePath } from './router'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import { policy } from './policy'

export default function App() {
  const path = usePath()
  const isPrivacy = path === '/privacy'

  useEffect(() => {
    document.title = isPrivacy ? `Privacy - ${policy.appName}` : policy.appName
  }, [isPrivacy])

  return isPrivacy ? <Privacy /> : <Home />
}
