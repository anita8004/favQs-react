import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card, Text, Flex, Box, Button, Heading } from '@radix-ui/themes'
import userApi from '@/apis/user'
import { useDispatch } from 'react-redux'
import { removeSession } from '@/store/reducers/userSlice'

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionData = useSelector((state: any) => state.user.session);
  const isLoggedIn = sessionData?.login

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/sign-in')
    }
  }, [isLoggedIn, navigate])

  const signOut = async () => {
    try {
      const res = await userApi.deleteSession();
      console.log(res);
      dispatch(removeSession());
      navigate('/sign-in');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Flex direction="column" align="center" py="6" px="6">
      <Flex mb="6" justify="center">
        <Heading>User Profile</Heading>
      </Flex>
      <Card className='user-card'>
        <Text as="div" size="2" weight="bold">
          { sessionData.login }
        </Text>
        <Text as="div" size="2" color="gray">
        { sessionData.email }
        </Text>
      </Card>
      <Box my="6">
        <Button onClick={signOut}>Sign Out</Button>
      </Box>
    </Flex>
  )
}

export default Home