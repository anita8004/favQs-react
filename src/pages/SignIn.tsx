import { Flex, TextField, Heading, Link, Button } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import { Link as RouterLink } from 'react-router-dom'
import userApi from '@/apis/user'
import { SignInPayloadState } from '@/types/user'
import { useDispatch } from 'react-redux'
import { setSession } from '@/store/reducers/userSlice'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SignInBox = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = async ( event: any ) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const payload: SignInPayloadState = {
      login: data.email as string,
      password: data.password  as string
    }
    try {
      const res = await userApi.createSession({ user: payload });
      console.log(res)
      if ('error_code' in res) {
        console.log(res.message);
      } else {
        dispatch(setSession(res));
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="full-page">
      <Flex 
        width="100%" 
        height="100%" 
        direction="column"
        align="center"
        justify="center"
      >
        <SignInBox>
          <Heading
            as="h1"
            className='full-page-title'
          >FavQs</Heading>
          <Form.Root className='form'
            onSubmit={signIn}
          >
            <Form.Field className='form-field' name="email">
              <div className='form-label-wrapper'>
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Message className="form-message" match="valueMissing">
                  Please enter your email
                </Form.Message>
                <Form.Message className="form-message" match="typeMismatch">
                  Please provide a valid email
                </Form.Message>
              </div>
              <div className="form-control">
                <Form.Control asChild>
                  <TextField.Input placeholder='Email' type='email' autoComplete='email' required />
                </Form.Control>
              </div>
            </Form.Field>
            <Form.Field className='form-field' name="password">
            <div className='form-label-wrapper'>
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Message className="form-message" match="valueMissing">
                  Please enter your password
                </Form.Message>
              </div>
              <div className="form-control">
                <Form.Control asChild>
                  <TextField.Input placeholder='Password' type='password' autoComplete='current-password' required />
                </Form.Control>
              </div>
            </Form.Field>
            <div className='form-footer'>
              <Form.Submit asChild>
                <Button className='form-button form-button--submit'>Sign In</Button>
              </Form.Submit>
            </div>
          </Form.Root>
        </SignInBox>
        <Link size="2" style={{ marginTop: '.5rem' }} asChild>
          <RouterLink to="/sign-up">Sign Up</RouterLink>
        </Link>
      </Flex>
    </div>
  )
}

export default SignIn