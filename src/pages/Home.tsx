import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card, Text, Flex, Box, Button, Heading, Avatar, Separator } from '@radix-ui/themes'
import userApi from '@/apis/user'
import { useDispatch } from 'react-redux'
import { removeSession, setUserInfo } from '@/store/reducers/userSlice'
import { RootState } from '@/store/store'

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const userInfo = useSelector((state: RootState) => {
    const info = state.user.info
    return 'login' in info ? info : null
  })

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/sign-in')
    }
  }, [isLoggedIn, navigate])

  const signOut = async () => {
    try {
      const res = await userApi.deleteSession();
      if ('error_code' in res) {
        console.log(res.message);
      } else {
        dispatch(removeSession());
        navigate('/sign-in');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getUserCallback = useCallback(() => {
    let ignore = false;
    const getUser = async (login: string) => {
      try {
        const res = await userApi.getUser(login);
        if ('error_code' in res) {
          console.log(res.message);
        } else {
          dispatch(setUserInfo(res));
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (username && !ignore) {
      ignore = true
      getUser(username)
    }
  }, [username, dispatch])

  useEffect(() => {  
    getUserCallback()
  }, [getUserCallback])

  if (!userInfo) {
    return (
      <Flex direction="column" align="center" py="6" px="6">
        <Box my="6">
          <Button onClick={signOut}>Sign Out</Button>
        </Box>
      </Flex>
    )
  }

  return (
    <Flex direction="column" align="center" py="6" px="6">
      <Flex mb="6" justify="center">
        <Heading>User Profile</Heading>
      </Flex>
      <Card className='user-card'>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src={userInfo.pic_url}
            radius="full"
            fallback="T"
          />
          <Box width="100%">
            <Text as="div" size="2" weight="bold">
              { userInfo.login }
            </Text>
            <Text as="div" size="2" color="gray">
              { userInfo.account_details.email }
            </Text>
          </Box>
          <Flex gap="3" align="center">
            <Flex direction="column" align="center" justify="center">
              <Heading size="1">Following</Heading>
              <Text>{ userInfo.following }</Text>
            </Flex>
            <Separator orientation="vertical" size="2" />
            <Flex direction="column" align="center" justify="center">
              <Heading size="1">Followers</Heading>
              <Text>{ userInfo.followers }</Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
      <Box my="6">
        <Button onClick={signOut}>Sign Out</Button>
      </Box>
    </Flex>
  )
}

export default Home