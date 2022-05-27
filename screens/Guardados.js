import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,FlatList, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
import {auth} from '../firebase';
import {db} from '../firebase';
export{Footer,Config};
const Guardados=({navigation})=>{ 
  const [data, setData] = useState([]);
  useEffect(() => {
    let correo = ""+auth.currentUser.email
    db.collection('Guardados').where("correo", "==", correo).get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
        });
        setData([...Usuario]);
      });
  }, []);
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEiali7WU-43F4nIBs-TF-c1Xq1nFGk_4VdrMbzKW1f3sg0U5Z6oYyGJuhCTuxv4ka4QbEezEIajB9VW73TnCkvFZUwobGQhe8Lb81kSitd8yvbq-Lcqc3ZgpB1ebzhuOdvaSZ08TG8ca98a5qF0T7UT-kbfTNmQ_9owgzOus10PBy3AUcep-KrahDgo=w436-h654" };
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
      navigation.navigate('Home')
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center w={"40%"}>
      <Text color="white" fontSize="25">Guardados</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <ScrollView  maxHeight={600}>
      <Divider my="2" />
     <FlatList margin={0}  refreshing data={data}
      renderItem={({item})=>
      <ScrollView maxHeight={550} >
      <Pressable onPress={() => {navigation.navigate('Reproduciendo',{
          Imagen:item.ImgCap,
          NombreCap:item.NombreCap,
          Canal:item.Canal,
          imgCa:item.ImgCap,
          D:item.Duracion
      })
      }}>
       <HStack space={3} justifyContent="flex-start" >
       <Center w={"30%"}>
       <Image size={75} resizeMode={"contain"} borderRadius={10} source={{
         uri:item.ImgCap
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
          </ScrollView>
      }
        >
      </FlatList>
      </ScrollView>
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Guardados;