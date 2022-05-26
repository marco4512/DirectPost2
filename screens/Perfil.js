import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider, Box,Pressable,VStack,Divider,Icon,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import {collection,getDocs} from "firebase/firestore";
import Footer from './Footer';
import Config from './Configuraciones';
import {auth} from '../firebase';
import {db} from '../firebase';
import {app} from '../firebase';
import firebase from '../firebase'
export{Footer,Config};
const Perfil=({navigation,route})=>{ 
  const {Imgen} = route.params
  const {NombreUsuario} = route.params
  const [users,setUsers]=useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(auth.currentUser.email)
    let correo = ""+auth.currentUser.email
    db.collection('usr').where("email", "==", correo).get()
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
      <Text></Text>
      <HStack space={2} paddingTop={5} justifyContent="flex-start">
      <Center>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      console.log("ConfigPaG")
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center paddingLeft={"25%"}>
      <Text color="white" fontSize="30">Mi Cuenta</Text>
      </Center>
      </HStack>
      <Divider my="2" />
      <Center paddingRight={1}>
      <Image size={100} resizeMode={"contain"} borderRadius={100} source={Imgen} alt="Alternate Text" />
      </Center>
      <Center paddingRight={4}>
    {data.length ? (
        data.map(book => ( <Text color="white" key={book.email} textAlign="center" fontSize="25"> Usuario: {book.name}</Text>
        ))
      ) : (
        <Text color="white" fontSize="30"></Text>
      )}
      </Center >
      <HStack space={2} paddingTop={5} paddingBottom={5}  justifyContent="center">
      <Center >
      <Text color="white" textAlign="center" fontSize="25">Correo: {auth.currentUser.email}</Text>
      </Center>
      </HStack>
      <Divider my="2" />
      <Center>
      <Text color="white"  fontSize="20">Contraseña</Text>
      </Center>
      <HStack space={2} paddingTop={5} paddingBottom={5} justifyContent="center">
      <Center >
      <Pressable  onPress={() =>{ 
      navigation.navigate('CCÑ',{
        FotoUsuario:Imgen
      })
      }} >
      <Text color="info.400" fontSize="17">Cambiar contraseña </Text>
      </Pressable>
      </Center>
      </HStack>
      <Divider my="2" />
      <Center>
      <Text color="white"  fontSize="20">Centro de Ayuda</Text>
      </Center>
      <HStack space={1} paddingTop={5} paddingBottom={5} justifyContent="center">
      <Center >
      <Pressable onPress={()=>  navigation.navigate('Ayuda',{
        FotoUsuario:Imgen
      }) } >
      <Text color="info.400" fontSize="17">Si necesitas Ayuda, da click aquí</Text>
      </Pressable>
      </Center>
      </HStack>
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Perfil;