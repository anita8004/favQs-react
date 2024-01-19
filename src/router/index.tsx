import {
  createBrowserRouter
} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

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
  }
])

export default router