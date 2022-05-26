import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,SafeAreaView,FlatList,VirtualizedList, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
import {db} from '../firebase';
export{Footer,Config};
const Reproductor=({navigation,route})=>{ 
    const {Canal} = route.params
    const {ImagenCanal} = route.params
    const {SugeAc}=route.params
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEiali7WU-43F4nIBs-TF-c1Xq1nFGk_4VdrMbzKW1f3sg0U5Z6oYyGJuhCTuxv4ka4QbEezEIajB9VW73TnCkvFZUwobGQhe8Lb81kSitd8yvbq-Lcqc3ZgpB1ebzhuOdvaSZ08TG8ca98a5qF0T7UT-kbfTNmQ_9owgzOus10PBy3AUcep-KrahDgo=w436-h654" };
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection('Educacion-Cap').where("Canal", "==", Canal).get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
        });
        setData([...Usuario]);
      });
  }, []);
  
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
      
      <HStack space={3} paddingTop={10} justifyContent="flex-start">
      <Center w={"30%"}>
      <Icon mb="1"onPress={() =>{ 
      navigation.navigate('Sugerencias',{
        Suge:SugeAc
      })
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center w={"40%"}>
      <Text color="white" fontSize="14">Lista de Reproducción</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Divider my="2" />
      <Box h={200} w={"100%"} bg={"black"}>
      <ImageBackground  source={ { uri:ImagenCanal  }} resizeMode="cover" style={styles.image}>
      <Center h={"100%"} bg={"black"} opacity={.7} >
          <Text  color={"white"} fontSize={"30"}>{Canal}</Text>
      </Center>
      </ImageBackground>    

      </Box>
     
      <ScrollView maxHeight={380} >
      <SafeAreaView style={{flex: 1}}>
      <FlatList margin={0}  refreshing data={data}
      
      renderItem={({item})=>
      
      <Pressable onPress={() => {navigation.navigate('Reproduciendo',{
          Imagen:item.imgCap,
          NombreCap:item.NombreCap,
          Canal:Canal,
          imgCa:ImagenCanal,
          D:item.Duracion
      })
      }}>
       <HStack space={3} justifyContent="flex-start" >
       <Center w={"30%"}>
       <Image size={75} resizeMode={"contain"} borderRadius={10} source={{
         uri:item.imgCap
       }} alt="Alternate Text" />
       </Center>
       <Center w={"40%"}>
       <Text paddingLeft={5} color="white" fontSize="16" paddingTop={3}>{item.NombreCap}</Text>
       </Center>
       <Center w={"30%"}>
       <Text paddingLeft={5} color="white" fontSize="12" paddingTop={3}>{item.Duracion}</Text>
       </Center>
       </HStack>
      <Divider my="2" />
      </Pressable>
          
      }
        >
      </FlatList>
      </SafeAreaView>
      </ScrollView>

     
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Reproductor;