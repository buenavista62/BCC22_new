import { Box, Button, Flex, Input, Text, Spacer, Center,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
Link} from '@chakra-ui/react';
import {CheckCircleIcon, MdCheckCircle} from '@chakra-ui/icons'
import HookForm from "./HookForm";



const MainMint = () => {
    
    return (
     
        <Flex direction={"column"} justify= "center" align = "center"  paddingBottom = "100px"  mt={[5,10,15]} >
            <Center fontSize={['25','40','50']} mt = {[3,4,5]} className = "title" rounded = 'md' >Limited EuroMouse Halloween NFTs!</Center>
            <HookForm/>
            <Text mb = {2} fontSize="3xl" mt={[3,6,9,12]}>
                Instructions
            </Text>
            <List spacing={3} id="instructions" color="white">
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Download an Ethereum based wallet. We recommend <Link href = 'https://metamask.io/'>Metamask</Link>.</ListItem>
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Scan the QR code on your gift card or go to <Link href = 'https://bcc-giftcards.vercel.app'>bcc-giftcards.vercel.app</Link>.</ListItem>
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Enter your pincode from the gift card and your wallet address (starts with 0x…).</ListItem>
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Click „submit“ to mint your NFT.</ListItem>
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Go to Metamask. Click on the menu on the top left and go to <i>browser</i> and type in: <Link href = 'https://testnets.opensea.io'>testnets.opensea.io</Link>.</ListItem>
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Click on the menu on the top right and connect your wallet. </ListItem>
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Once your wallet is connected click on Account and then on Profile.</ListItem>
               <ListItem fontSize = "sm"> 
               <ListIcon as={CheckCircleIcon} color='green.500' />Within your profile, swipe to the right to find the section <i>hidden</i>. Your NFT will show up here.</ListItem>
            </List>
        </Flex>

    );
};


export default MainMint