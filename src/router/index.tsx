import {
  createBrowserRouter
} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Counter from '@/features/counter/Counter'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
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
  }
])

export default router