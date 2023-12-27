import React from 'react'
import { Card, CardBody, Stack,Image, Heading,Text,Divider,CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({titulo, id}) => {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src=''
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{titulo}</Heading>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          <Link to={`/product/${id}`}>
          Ver detalle
          </Link> 
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default Item
