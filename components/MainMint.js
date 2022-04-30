import { Box, Button, Flex, Input, Text, Spacer, Center,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
Link} from '@chakra-ui/react';
import HookForm from "./HookForm";


const MainMint = () => {
    
    return (
     
        <Flex direction={"column"} justify= "center" align = "center" height= "100vh" paddingBottom = "150px" >
            <Center fontSize='4xl' mt = {[3,4,5]} bg = 'red.200' rounded = 'md' boxShadow = '2xl'>Limited EuroMouse Halloween NFTs!</Center>
            <HookForm/>
            <Spacer/>
            <Text mb = {2}>
                Instructions
            </Text>
            <OrderedList>
               <ListItem fontSize = "sm"> Download an Ethereum based Wallet and create an account. We recommend Metamask.</ListItem>
               <ListItem fontSize = "sm"> Scan the QR code on this gift card or go to <Link href = 'https://bcc-giftcards.vercel.app'>bcc-giftcards.</Link></ListItem>
               <ListItem fontSize = "sm"> Type in your pincode from the gift card and your wallet address (starts with 0x…).</ListItem>
               <ListItem fontSize = "sm"> Click „submit“ to mint your NFT.</ListItem>
               <ListItem fontSize = "sm"> Go to Metamask. Click on the menu on the top left and go to browser and type in: <Link href = 'https://testnets.opensea.io'>testnets.opensea.io</Link> </ListItem>
               <ListItem fontSize = "sm"> Click on the menu on the top right and connect your wallet. </ListItem>
               <ListItem fontSize = "sm"> Once your wallet is connected click on Account and then on Profile.</ListItem>
               <ListItem fontSize = "sm"> Within your profile, swipe to the right to find the section „hidden“. Your NFT will show up here.</ListItem>
            </OrderedList>
        </Flex>

    );
};


export default MainMint