import React, {useEffect, useState} from 'react';
import { NativeBaseProvider,ScrollView,Skeleton,Icon, Box,VStack,FormControl,Input,Center,Heading,Divider,Link,Button,HStack,ZStack,Text,Image,AspectRatio,Stack,Fab,Pressable} from "native-base";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { ImageBackground, StyleSheet, View,SectionList,FlatList } from "react-native";
import Footer from './Footer';
import {db} from '../firebase';
import Config from './Configuraciones';
export{Footer,Config};
const Sugerencias=({navigation,route})=>{ 
  const {Suge} = route.params
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEi_ItwqJOcvOHD-Ee3c1A5bzwQiltmQGXvu9RPBl_ejZlxsUvixGskTlEd3DAWklaJabDt3wB0UbGo7xar871vkiHxjtzLzj-OXohuwxvSrcod31g-tmidzop0O12jx7_xLkTzWytcSULUoKwGRyFIVF531uWmcQlVo2zrHFKlHWKskcLfki7q4gAyt=w478-h718" };
  const [data, setData] = useState([]);
  const [fisi, setfisi] = useState([]);
  useEffect(() => {
    
    db.collection(Suge).where("Catego", "==", "Matematicas").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data())
        });
        setData([...Usuario])
        ;
      });
      db.collection(Suge).where("Catego", "==", "Fisica").get()
      .then(querySnapshot => {
        const fisica = [];
        querySnapshot.forEach(doc => {
          fisica.push(doc.data());
          console.log(doc.data())
        });
        setfisi([...fisica])
        ;
      });
  }, []);
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    Titulos:{
      textAlign:"center"
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
      <Text color="white" fontSize="20">{Suge}</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <ScrollView  maxHeight={600}>
      <Divider my="2" />
      <Text color="white" fontSize="25"  style={styles.Titulos}>Matematicas</Text>
      <Divider my="2" />  
        <FlatList margin={0} horizontal refreshing data={data}
      
      renderItem={({item})=>
      <Pressable onPress={() => { 
        navigation.navigate('Reproductor',{
          Canal:item.Nombre,
          ImagenCanal:item.Img,
          SugeAc:Suge,
          Capitulos:item.Capitulos
        })
        }}>
      <Box  alignItems="center" h={240} w={250}>
      <Box maxW="80" h={300}  rounded="lg" overflow="hidden" borderColor="#0D0D0D" borderWidth="1" _dark={{
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
            uri: item.Img
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "white",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            {item.Catego}
          </Center>
        </Box>
        <Stack margin={0} >
          <Stack >
            <Heading   color={"white"} opacity={.8} size="md" ml="-1">
           | {item.Nombre}
            </Heading>
            
            <Text padding={'5px'} color={"white"} opacity={.5} fontWeight="400">
            {item.Des}
          </Text>
          </Stack>
         
        </Stack>
      </Box>
    </Box>
    </Pressable>
    }
      >
      </FlatList>
      <Divider my="2" />
      <Text color="white" fontSize="25"  style={styles.Titulos} >Fisica</Text>
      <Divider my="2" />
      <FlatList margin={0} horizontal refreshing data={fisi}
      
      renderItem={({item})=>
      <Pressable onPress={() => { 
        navigation.navigate('Reproductor',{
          Canal:item.Nombre,
          ImagenCanal:item.Img,
          SugeAc:Suge,
          Capitulos:item.Capitulos
        })
        }}>
      <Box  alignItems="center" h={240} w={250}>
      <Box maxW="80" h={300}  rounded="lg" overflow="hidden" borderColor="#0D0D0D" borderWidth="1" _dark={{
      borderColor: "#15D013",
      backgroundColor: "#0D0D0D",
      opacity:".6"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "#0D0D0D"
    }}>
        <Box >
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image  source={{
            uri: item.Img
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "white",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            {item.Catego}
          </Center>
        </Box>
        <Stack margin={0} >
          <Stack >
            <Heading   color={"white"} opacity={.8} size="md" ml="-1">
           | {item.Nombre}
            </Heading>
            <Text padding={'5px'}  color={"white"} opacity={.5} fontWeight="400">
            {item.Des}
          </Text>
          </Stack>
         
        </Stack>
      </Box>
    </Box>
    </Pressable>
    }
      >
      </FlatList>
      </ScrollView>
  
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Sugerencias;