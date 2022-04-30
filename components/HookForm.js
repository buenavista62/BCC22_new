import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Spacer,
  ChakraProvider,
  Flex,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import React from "react";
import { ethers, BigNumber } from "ethers";
import EuroMouse from "./EuroMouse.json";

var thecodes = JSON.parse(process.env.NEXT_PUBLIC_CODES);
const EuroMouseAddress = "0xC35b39ebE36f4c8B96D3a475EDAafEe8722aA2dE";

export default function HookForm() {
  const [display, setDisplay] = React.useState("none"); //error message
  const [sudisplay, setSudisplay] = React.useState("none"); //success

  const provider = new ethers.providers.InfuraProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_INFURA_KEY
  );
  //const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY_0X);
  //const signer = wallet.connect(provider);
  let signer = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
  const contract = new ethers.Contract(EuroMouseAddress, EuroMouse.abi, signer);
  
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function mintit(Addr, TokenID, ind) {
    try {
      const response = await contract.mint(Addr, BigNumber.from(TokenID));
      console.log("response:", response);
      thecodes.splice(ind, 1, 1993);
    } catch (err) {
      console.log("error: ", err);
    }
  }
  function onSubmit(values) {
    let TokenID = thecodes.indexOf(parseInt(values["Giftcard code"])) + 1;
    let Addr = ethers.utils.getAddress(values["ethaddr"]);
    let ind = thecodes.indexOf(parseInt(values["Giftcard code"]));
    if (ind == -1) {
      return new Promise((resolve) => {
        setTimeout(() => {
          setDisplay("");
          setSudisplay("none");
          //alert("wrong code or already used")
          resolve();
        }, 3000);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          mintit(Addr, TokenID, ind);
          setDisplay("none");
          //alert(JSON.stringify(values, null, 2))
          setSudisplay("");
          resolve();
        }, 3000);
      });
    }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Alert status="error" display={display}>
          <AlertIcon />
          <AlertTitle>Minting did not work</AlertTitle>
          <AlertDescription>
            giftcard code may be wrong or already used
          </AlertDescription>
        </Alert>

        <Alert
          display={sudisplay}
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Mint request is submitted.
          </AlertTitle>
          <AlertDescription maxWidth="sm"> The NFT has been minted</AlertDescription>
        </Alert>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          mt={[2, 3, 4, 5]}
          p={[2, 3, 4, 5]}
          fontSize={["sm", "md", "lg", "xl"]}
        >
          <FormControl isInvalid={errors.name}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb = {2}
            >
              {" "}
              Enter your giftcard code and wallet address
            </Box>
            <Input
              id="Giftcard code"
              type="numeric"
              placeholder="Giftcard code"
              _placeholder={{ color: 'black' }}
              {...register("Giftcard code", {
                required: "required",
                minLength: { value: 6, message: "length should be 6" },
              })}
            />
            <Spacer />
            <Input
              id="ethaddr"
              placeholder="0x..."
              _placeholder={{ color: 'black' }}
              {...register("ethaddr", {
                required: "required",
                minLength: { value: 40, message: "invalid address" },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
            
          </FormControl>
          <Button
              colorScheme="teal"
              isLoading={isSubmitting}
              loadingText="Submitting"
              variant="outline"
              type="submit"
              mt={[2,3,4,5]}
            >
              Submit
            </Button>
        </Flex>
        <Spacer />
      </form>
  
  );
}
