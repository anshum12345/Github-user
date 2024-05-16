import React from "react"
import { Button,Container,HStack,VStack,Input } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return(

    <Container maxW={'container.x1'} h={'100vh'} p={'16'} >
    <VStack color={'red'} h={'full'} justifyContent={'center'}>
    <AiOutlineCloudUpload size={'10vmax'} /> 

    <form>
      <HStack>
        <Input
        required
        type={'file'}
        css={{
          '&::file-selector-button': {
            border: 'none',
            width: 'calc(100% + 36px)',
            height: '100%',
            marginLeft: '-18px',
            color: 'purple',
            backgroundColor: 'white',
            cursor: 'pointer',
          },
        }}
      
        />
        <Button colorScheme={'red'} type={'submit'}>Upoad Videos
        </Button>
       
        </HStack>
        </form> 
        </VStack>   
    </Container>
  )
}

export default Upload; 