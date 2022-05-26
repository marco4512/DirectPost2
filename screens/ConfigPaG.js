import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,Slider, Box,VStack,Pressable,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
import {auth} from '../firebase';
const ConfigPaG=({navigation})=>{ 
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEiali7WU-43F4nIBs-TF-c1Xq1nFGk_4VdrMbzKW1f3sg0U5Z6oYyGJuhCTuxv4ka4QbEezEIajB9VW73TnCkvFZUwobGQhe8Lb81kSitd8yvbq-Lcqc3ZgpB1ebzhuOdvaSZ08TG8ca98a5qF0T7UT-kbfTNmQ_9owgzOus10PBy3AUcep-KrahDgo=w436-h654" };
  const [selected, setSelected] =React.useState(0);
  const [isHidden, setIsHidden] = useState(false)
  const [isHidden1, setIsHidden1] = useState(false)
  const [isHidden2, setIsHidden2] = useState(false)
  const handleClick = () => setIsHidden (!isHidden)
  const handleClick1 = () => setIsHidden1 (!isHidden1)
  const handleClick2 = () => setIsHidden2 (!isHidden2)
  
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const FotoUsuario = { uri: "https://lh3.googleusercontent.com/-nc3z9IIAnpg/YY01fQFuG8I/AAAAAAAAA8k/ef5QX924vMMo9qIEpetkH5hc62V1cFuKACLcBGAsYHQ/perfil.png"};
  const handleClose = () =>{
    auth.signOut().then(() => {
      navigation.replace("Inicio")
    })
    .catch(error => alert(error.mesage))
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
        <Text color="white" fontSize="50" paddingTop={10}>Configuración</Text>
      </Center>
      <ScrollView maxHeight={550} >
      <HStack space={3} justifyContent="center" >
      <Center paddingRight={1}>
      <Image size={70} resizeMode={"contain"} borderRadius={100} source={FotoUsuario} alt="Alternate Text" />
      </Center>
      <Center  paddingLeft={1}>
          <VStack space={2} alignItems="flex-start">
          <Center>
          <Text color="white" fontSize="20" paddingTop={3}>Nombre del Usuario</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>Ver Perfil</Text>
          </Center>
          </VStack>
      </Center>
      <Center paddingLeft={1}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('Perfil',{
        Imgen:FotoUsuario,
        NombreUsuario:"NombreUsuario"
      })
      console.log("IrAlPerfil")
      }} as={<MaterialIcons name="chevron-right" />} color="white" size="sm" />
      </Center>
    </HStack>

    <HStack space={2} paddingTop={5} justifyContent="flex-start" >
      <VStack space={2} paddingLeft={1} marginLeft={0} w={"60%"} alignItems="flex-start">
          <Center>
          <Text color="white" fontSize="20" paddingTop={3}>Descargar solo el audio</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>Guardar solo el audio de los podcast de video</Text>
          </Center>
        </VStack>
      <Center w={"40%"} paddingLeft={10} >
      <Pressable borderWidth={0} onPress={handleClick} >
      <Icon   mb="1" as={<MaterialCommunityIcons name={isHidden ? "toggle-switch" : "toggle-switch-off-outline"} />} color="white" size="xl" />
      </Pressable>
      </Center>
    </HStack>
    <HStack space={2} paddingTop={5} justifyContent="flex-start" >
      <VStack space={2} paddingLeft={1} marginLeft={0} w={"60%"} alignItems="flex-start">
          <Center>
          <Text color="white" fontSize="20" paddingTop={3}>Reproducir solo el audio</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>Reproducir solo el audio de los podcast</Text>
          </Center>
        </VStack>
      <Center w={"40%"} paddingLeft={10} >
      <Pressable borderWidth={0} onPress={handleClick1} >
      <Icon   mb="1" as={<MaterialCommunityIcons name={isHidden1 ? "toggle-switch" : "toggle-switch-off-outline"} />} color="white" size="xl" />
      </Pressable>
      </Center>
    </HStack>
    <HStack space={2} paddingTop={5} justifyContent="flex-start" >
      <VStack space={2} paddingLeft={1} marginLeft={0} w={"60%"} alignItems="flex-start">
          <Center>
          <Text color="white" fontSize="20" paddingTop={3}>Permitir Recomendaciones</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>Permitir que Direct Post recomiende podcast para ti</Text>
          </Center>
        </VStack>
      <Center w={"40%"} paddingLeft={10} >
      <Pressable borderWidth={0} onPress={handleClick2} >
      <Icon   mb="1" as={<MaterialCommunityIcons name={isHidden2 ? "toggle-switch" : "toggle-switch-off-outline"} />} color="white" size="xl" />
      </Pressable>
      </Center>
    </HStack>
    <Center w="100%"> 
        <Text color="white" fontSize="30" paddingTop={5}>Volumen Máximo</Text>
        <Text color="white" fontSize="16" paddingTop={5}>Configura el volumen maximo de reproducción</Text>
        <Text color="white" fontSize="16">{onChangeValue}%</Text>
      </Center>
     
      <Slider  defaultValue={70} colorScheme="emerald" onChange={v => {
        setOnChangeValue(Math.floor(v));
      }} >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Pressable  onPress={handleClose} >
      <Text color="white" fontSize="30" paddingTop={5}>Cerrar Seciòn</Text>
      </Pressable>
    </ScrollView>
      <Footer></Footer>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
export default ConfigPaG;