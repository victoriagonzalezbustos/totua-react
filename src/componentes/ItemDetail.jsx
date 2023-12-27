import React from 'react'
import { Card, CardBody, Stack,Image, Heading,Text,Divider,CardFooter, ButtonGroup, Button } from '@chakra-ui/react'

const ItemDetail = ({titulo,descripcion,precio}) => {

    


  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src=''
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{titulo}</Heading>
        <Text>
         {descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          {precio}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Ver detalle
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default ItemDetail
