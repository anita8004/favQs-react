import {
  createBrowserRouter,
  Navigate
} from 'react-router-dom'
import Home from '@/pages/Home'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import Counter from '@/features/counter/Counter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
], {
  basename: '/favQs-react/'
})

export default router