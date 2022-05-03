import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Spacer,Flex,VStack,HStack, Container
  } from '@chakra-ui/react';
  import window from 'react';
  export default function Team() {
    return (
    <Stack direction={["column", "row"]} spacing = '24px' align = "center" mt = {[3,6,9,12]} mb= {[3,6,9,12]} paddingBottom = "55px" >
        <Box
          w={[300,400,500]}
          
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'3xl'}
          rounded={'lg'}
          p={[2,3,4,5]}
          textAlign={'center'}>
          <Avatar
            size={'2xl'}
            src={
              '/san.png'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}

          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Sandra Baader
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            B.A. Law{' '}
          </Text>
  
          
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onclick="window.location.href = 'mailto:sandra.baader@stud.unibas.ch';">
              Mail
            </Button>
        </Box>
        <Spacer/>
        <Box
          w={[300,400,500]}
          
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'3xl'}
          rounded={'lg'}
          p={[2,3,4,5]}
          textAlign={'center'}>
          <Avatar
            size={'2xl'}
            src={
              '/ser.png'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}

          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Sercan Ates
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Msc Economics, Major Data Science and Computational Economics{' '}
          </Text>
  
          
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onclick="window.location.href = 'mailto:sercan.ates@stud.unibas.ch';">
              Mail
            </Button>
        </Box>
        <Spacer/>
        <Box
          w={[300,400,500]}
          
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'3xl'}
          rounded={'lg'}
          p={[2,3,4,5]}
          textAlign={'center'}>
          <Avatar
            size={'2xl'}
            src={
              '/leo.png'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}

          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Leonardo Norambuena
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            M.A. European Global Studies{' '}
          </Text>
  
          
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onclick="window.location.href = 'mailto:sandra.baader@stud.unibas.ch';">
              Mail
            </Button>
        </Box>
        <Spacer/>
        <Box
          w={[300,400,500]}
          
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'3xl'}
          rounded={'lg'}
          p={[2,3,4,5]}
          textAlign={'center'}>
          <Avatar
            size={'2xl'}
            src={
              '/luk.png'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}

          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Lukas Bütikofer
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            B.A. Business and Economics{' '}
          </Text>
  
          
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onclick="window.location.href = 'mailto:sandra.baader@stud.unibas.ch';">
              Mail
            </Button>
        </Box>
      
      </Stack>
      
    );
  }