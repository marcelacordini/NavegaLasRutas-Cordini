import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Image, CardHeader } from "@chakra-ui/react";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ id, title, precio, img, description, stock, ingredients }) => {

  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades de ${title}` )
  }

    return (
      <Card maxW='sm'>
    <CardBody>
      <Image
        objectFit='cover'
        maxW={{ base: '50%', sm: '200px' }}
        src={img}
        alt={title}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>
        <CardHeader>
        {description} Está hecho con {ingredients}.
        </CardHeader>
        <Text color='green.700' fontSize='3xl'>
          ${precio}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
        <CardFooter>
          
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd}/>
       
     
    </CardFooter>
  </Card>
    );
  };

export default ItemDetail