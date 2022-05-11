import React from "react";
import { NativeBaseProvider,Icon, Box,VStack,FormControl,Input,Center,Heading,Divider,Link,Button,HStack,ZStack,Text,Image,AspectRatio,Stack,Fab,Pressable} from "native-base";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { ImageBackground, StyleSheet, View,SectionList,FlatList } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
const Sugerencias=({navigation,route})=>{ 
  const {Suge} = route.params
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEi_ItwqJOcvOHD-Ee3c1A5bzwQiltmQGXvu9RPBl_ejZlxsUvixGskTlEd3DAWklaJabDt3wB0UbGo7xar871vkiHxjtzLzj-OXohuwxvSrcod31g-tmidzop0O12jx7_xLkTzWytcSULUoKwGRyFIVF531uWmcQlVo2zrHFKlHWKskcLfki7q4gAyt=w478-h718" };
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
    },item:{
      margin:0
    },
   
  });
  return (
   
    <NativeBaseProvider >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <HStack space={3} paddingTop={10} justifyContent="flex-start">
      <Center w={"30%"}>
      <Icon mb="1"onPress={() =>{ 
      navigation.navigate('Home')
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center w={"40%"}>
      <Text color="white" fontSize="23">{Suge}</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Divider my="2" />
        <FlatList margin={0} horizontal refreshing data={[
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEhB7ab4QZcsx4uLAvW9UjseJQ9rr-29BP06tnOKSNRwKhwFsmd7y1Qz_C_hHsmQ94Rd1bck4cUQ93L6O6p4zir16W_HGe2mNXK5FYg_EITMHDf6tejimmdjnhpb2MDaNZENZCRqJufjHNJRhfs5574Ik_4CFACOX2LEdTDnIzaeBuGNMBkDmr9czGHn',Nombre:'JulioProfe',Categoria:'Matematicas'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEgfGLrq9et5gwnNti4v7W17vlnl5riY2SEUacMVURcSL5AtMRTGJFz3d4oFHsa6gwOF87__S-5bN66WQBheUtRxSD2OWaIDoISDKpFfWxSajaA6yh_tznDBY6vkrUlp8QySxkDIIQYi5lQEKb4qy8H4fE0KCB3xhDVcArTDZ3P6Jl15GD8VO6Z5sf-a',Nombre:'CaminoAIng',Categoria:'Matematicas'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEjmYHRYea78RDmwcD5gGmyKJg5L0ab7sNnCXVuabmzbk1ydpcQ34ptZHCiI_6YTA08eysMrn5hZY4Tw_uUDMi9pHfueP4U6_C2uTpHKmYgLBdbHMAIPDOfd5pQHRtYW7r4tH5qiT5xEC3lfzTftl23mtxKAiAFMXnC8JNqNWUJnzJJyFi0eTVPfm5Sa',Nombre:'MateFacil',Categoria:'Matematicas'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEhEqtj2cm9mC6Sm6iVVRzX63FbXKqwZ6oegNgXBJgi-tRM66fv-M5LZN6YJOG4O1zl7AzmFpXAEaBw2PT6PpwSyWDPhIi0Ihwob63fUwi3zDjxSqYZXBa0B3NywZW6Nc12b9WNFfNEk-LJcIZ5-UqjOIRQuj7HS8RBsEZua6iromJtQS0qMpMtVhaz8',Nombre:'CodigoFacilito',Categoria:'Matematicas'},
      ]}
      
      renderItem={({item})=>
      <Pressable onPress={() => { 
        navigation.navigate('Reproductor',{
          Canal:item.Nombre,
          ImagenCanal:item.key,
          SugeAc:Suge
        })
        }}>
      <Box  alignItems="center" h={10} w={250}>
      <Box maxW="80"  rounded="lg" overflow="hidden" borderColor="#0D0D0D" borderWidth="1" _dark={{
      borderColor: "#0D0D0D",
      backgroundColor: "#0D0D0D"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "#0D0D0D"
    }}>
        <Box >
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image  source={{
            uri: item.key
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "white",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            {item.Categoria}
          </Center>
        </Box>
        <Stack margin={0} >
          <Stack >
            <Heading   color={"white"} opacity={.8} size="md" ml="-1">
           | {item.Nombre}
            </Heading>
          </Stack>
         
        </Stack>
      </Box>
    </Box>
    </Pressable>
    }
      >
      </FlatList>
      <Divider my="2" />
  
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Sugerencias;