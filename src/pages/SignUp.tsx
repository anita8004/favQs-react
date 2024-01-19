import { Flex, Box, TextField, Heading, Link, Button } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import { Link as RouterLink } from "react-router-dom";

function SignUp() {
  return (
    <div className='full-page'>
      <Flex
        width="100%" 
        height="100%" 
        direction="column"
        align="center"
        justify="center"
      >
        <Box px="4" style={{ width: '40vw' }}>
          <Heading
            as="h1"
            className='full-page-title'
          >FavQs</Heading>
          <Form.Root className='form'
            onSubmit={(event) => {
              event.preventDefault();
              const data = Object.fromEntries(new FormData(event.currentTarget));
              console.log(data)
            }}
          >
            <Form.Field className='form-field' name="login">
              <div className='form-label-wrapper'>
                <Form.Label className="form-label">User Name</Form.Label>
                <Form.Message className="form-message" match="valueMissing">
                  Please enter your user name
                </Form.Message>
              </div>
              <div className="form-control">
                <Form.Control asChild>
                  <TextField.Input type='text' required />
                </Form.Control>
              </div>
            </Form.Field>
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
                  <TextField.Input placeholder='Email' type='email' required />
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
                  <TextField.Input placeholder='Password' type='password' required />
                </Form.Control>
              </div>
            </Form.Field>
            <div className='form-footer'>
              <Form.Submit asChild>
                <Button className='form-button form-button--submit'>Sign Up</Button>
              </Form.Submit>
            </div>
          </Form.Root>
        </Box>
        <Link size="2" style={{ marginTop: '.5rem' }} asChild>
          <RouterLink to="/sign-in">Back to Sign In</RouterLink>
        </Link>
      </Flex>
    </div>
  )
}

export default SignUp