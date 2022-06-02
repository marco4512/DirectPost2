import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Slider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,FlatList, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
import {auth} from '../firebase';
import {db} from '../firebase';
export{Footer,Config};

const Reproduciendo=({navigation,route})=>{ 
  
  let correo = ""+auth.currentUser.email
  let noGUta = false
    const {Imagen} = route.params
    const {NombreCap} = route.params
    const {Canal} = route.params
    const {imgCa} = route.params
    const {D}=route.params
    const [Megusta, setMegusta]=  useState([]);
  useEffect(() => {
    db.collection('Guardados').where("correo", "==",correo)
    .where("NombreCap", "==",NombreCap).get()
    .then(querySnapshot => {
      const Usuario = [];
      querySnapshot.forEach(doc => {
        Usuario.push(doc.data());
        console.log(doc.data())

      });
      setMegusta([...Usuario])
      Usuario.length ? (
        setIsHidden (!isHidden)
       ) : (
        setNoGUta(true)
       )

      ;
    });
  }, []);
   
    const [a1, setA1]=useState( [{
      Canal:Canal,
      Duracion:D,
      ImgCap:imgCa,
      NombreCap:NombreCap,
      correo:correo }]
);

    const [isHidden, setIsHidden] = useState(false)
    const [NoGUta, setNoGUta] = useState(false)
    const handleClick = () =>{ 
      isHidden ? EliminarMeguta():GuardadMegusta()
      setIsHidden (!isHidden)}
    const [isHidden2, setIsHidden2] = useState(false)
    const handleClick2 = () => setIsHidden2 (!isHidden2)
    const [isHidden3, setIsHidden3] = useState(false)

    const handleClick3 = () => setIsHidden3 (!isHidden3)
    const [isHidden4, setIsHidden4] = useState(false)
    const handleClick4 = () => setIsHidden4 (!isHidden4)
    
    const Compara =()=>{
      Megusta.length ? (
       console.log("hola")
      ) : (
        console.log("nASDA")
      )

    }
    const GuardadMegusta =()=>{
      db.collection("Guardados").add({
        Canal: Canal,
        Duracion:D,
        ImgCap: Imagen,
        NombreCap:NombreCap,
        correo: correo.toLowerCase()
    })
    .then((docRef) => {
        console.log("Registrado En me Gusta: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    }
    const EliminarMeguta =()=>{
      db.collection('Guardados').where("correo", "==",correo).where("NombreCap", "==",NombreCap).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete();
        });
    });
    }


    
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
      navigation.navigate('Reproductor',{
        Canal:Canal,
        ImagenCanal:imgCa
      })
    }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center w={"40%"}>
      <Text color="white" fontSize="20">{Canal}</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Divider my="2" />
      <Box w={"100%"} h={480} bg={"black"}>
      <ImageBackground  source={ { uri:Imagen}} resizeMode="cover" style={styles.image}>
      <Center h={"100%"} bg={"black"} opacity={.7} >
          <Text  color={"white"} fontSize={"30"}>{NombreCap}</Text>
      </Center>
      </ImageBackground>  
      </Box>
      <Slider  defaultValue={0} colorScheme="emerald">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      <Text color={"white"} textAlign={"right"}>{D}</Text> 

      <HStack space={5} paddingTop={0} justifyContent="center">
        <Center w={"10%"} ><Text>.</Text></Center>
        <Center w={"10%"}>
        <Pressable borderWidth={0} onPress={handleClick3} >
        <Icon    mb="1" as={<MaterialCommunityIcons name={isHidden3 ? "skip-previous-circle" : "skip-previous-circle-outline"} />} color="white" size="xl" />
        </Pressable> 
          </Center>
          <Center w={"10%"}>
          <Pressable borderWidth={0} onPress={handleClick2} >
        <Icon    mb="1" as={<MaterialCommunityIcons name={isHidden2 ? "play-circle" : "pause-circle"} />} color="white" size="xl" />
        </Pressable> 
              </Center>
        <Center w={"10%"} >
        <Pressable borderWidth={0} onPress={handleClick4} >
        <Icon    mb="1" as={<MaterialCommunityIcons name={isHidden4 ? "skip-next-circle" : "skip-next-circle-outline"} />} color="white" size="xl" />
        </Pressable> 
          </Center>
        <Center  w={"10%"}>
        <Pressable borderWidth={0} onPress={handleClick} >

        <Icon   mb="1" as={<MaterialCommunityIcons name={isHidden ? "cards-heart" : "heart-outline"} />} color="red.900" size="xl" />
        </Pressable> 
              </Center>
      </HStack>
      <Footer></Footer>
      </ImageBackground>

    </NativeBaseProvider>
  );
}
export default Reproduciendo;