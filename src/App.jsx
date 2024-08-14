import { lazy, Suspense, useContext } from 'react'
import { Context } from './Context/Context'
import Dashboard from './routes/Dashboard'
import './App.css'
import Loading from './assets/images/loading.jpg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Login = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import('./routes/Login')), 1500)
    }),
)

function App() {
  const { token } = useContext(Context)
  return token ? (
    <Dashboard />
  ) : (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-[300px] mt-[100px]">
          <img src={Loading} alt="loading" width={300} height={300} />
        </div>
      }
    >
      <Login />
    </Suspense>
  )
}

export default App
