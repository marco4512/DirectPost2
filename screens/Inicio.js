import React from "react";
import { NativeBaseProvider, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
const Inicio=({navigation})=>{ 
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEi_ItwqJOcvOHD-Ee3c1A5bzwQiltmQGXvu9RPBl_ejZlxsUvixGskTlEd3DAWklaJabDt3wB0UbGo7xar871vkiHxjtzLzj-OXohuwxvSrcod31g-tmidzop0O12jx7_xLkTzWytcSULUoKwGRyFIVF531uWmcQlVo2zrHFKlHWKskcLfki7q4gAyt=w478-h718" };
  const Sumit =()=>{
   navigation.navigate('Home')
   console.log("Home")
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    image: {
      flex: 1,
      justifyContent: "center",
      
      backgroundColor:"black"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    Input:{
        textAlign: "center",
        backgroundColor: "#000000c0",
        color:"white",
        width: "100%"
    },
   
  });
  return (
    <NativeBaseProvider >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     <Center w="100%"> 
        <Box safeArea p="2" py="8" w="90%" maxW="290"  >
          <Center padding={15} marginTop={20}>
              <Image size={150} resizeMode={"contain"} borderRadius={100} source={{
            uri: "https://blogger.googleusercontent.com/img/a/AVvXsEi9FrVoZ_qb_AvWeKYK4EsSrS6L0ISkzaIuw8SZ-H1be_wSOp4P7WQ81kYVqpR058WCJI0jIQhtI9EOKoRcwX3Wy_gxPGhrcibzs0WiZfMwT3qtJMif5nMXD2zvSE21b3GQoE3hI1I8TDKMIaczpbCLs4duhrde17ES8rjMFTLc-wblNY2XsG80Ei75"
          }} alt="Alternate Text" />
          </Center>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label  ><Text style={{color:"white", fontSize:20}}>
                Email
              </Text></FormControl.Label>
              <Input color={"white"} fontSize={20} bgColor={"#BF3939"} opacity={.8} />
            </FormControl>
            <FormControl  style={{color:"white", fontSize:20}} >
              <FormControl.Label><Text style={{color:"white", fontSize:20}}>
                Password
              </Text></FormControl.Label>
              <Input type="password" color={"white"} fontSize={20} bgColor={"#BF3939"} opacity={.8} ><Text style={{fontSize:20}}>
                
              </Text> </Input>
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "#F2BF5E"
            }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="red" onPress={Sumit} >
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text style={{color:"white", fontSize:15}}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{
              color: "#D93D4A",
              fontWeight: "medium",
              fontSize:15
            }} href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
export default Inicio;
