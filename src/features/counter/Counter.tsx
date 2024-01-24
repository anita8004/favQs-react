import {useAppDispatch, useAppSelector} from '@/hooks';
import {
  decrement,
  increment,
  selectCount
} from './counterSlice';
import { Flex, Text, Button } from '@radix-ui/themes'

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <Flex py="5" align="center" justify="center">
      <Button 
        radius="large" 
        variant="soft"
        onClick={() => dispatch(decrement())}
      >Decrement</Button>
      <Text as="span" mx="5">{ count }</Text>
      <Button 
        radius="large" 
        variant="soft"
        onClick={() => dispatch(increment())}
      >Increment</Button>
    </Flex>
  )
}