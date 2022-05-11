import React from "react";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,SafeAreaView,FlatList,VirtualizedList, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
const Reproductor=({navigation,route})=>{ 
    const {Canal} = route.params
    const {ImagenCanal} = route.params
    const {SugeAc}=route.params
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
      <FlatList margin={0}  refreshing data={[
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEhB7ab4QZcsx4uLAvW9UjseJQ9rr-29BP06tnOKSNRwKhwFsmd7y1Qz_C_hHsmQ94Rd1bck4cUQ93L6O6p4zir16W_HGe2mNXK5FYg_EITMHDf6tejimmdjnhpb2MDaNZENZCRqJufjHNJRhfs5574Ik_4CFACOX2LEdTDnIzaeBuGNMBkDmr9czGHn',Nombre:'Capitulo uno',Categoria:'Matematicas',Duracion:'14:30'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEgVagDiZx2J-ak6qy2aVaenXlaZ3qzveMDPwcvrkE9OWcN_f9lRlnkSvzKLM4lZDXDRZTCMdyNAmy3KLCA16xpUNzcQnr7MMfwwHRJCRptgiIUZBTdDpI_dpUYXtd0LgmRuBnszD-BMiKoEcPB9T5vb0Sv8mjF-YUDeKAZhFKwYgvvByXqh5CiF0FnN',Nombre:'Capitulo dos',Categoria:'Matematicas',Duracion:'15:30'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEhr8pP2xcnMpxZtpqBkVZz6YxFTwtDG_E0akOoaoMMMGCcc5-mng3faviflQGSJyZWewXBJBXvdgisg3qh7slu7IacazKsirNPqBLqJgbQMQAfiwIt99owAxvqaODEZZeNM6xD6HxMukzjSUm8Z5L9eH8vyRi9lVTHZDXybJZkw6pmeqFt0JlPBMMKl',Nombre:'Capitulo tres',Categoria:'Matematicas',Duracion:'20:50'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEi69g-zXU36ojn1LS9M7ce7ZB_Ccx2ICroJL-zWB97Wp5XpgO1t-wi8Iq8q_eA059S9bdu1t0EzHGLU1bv8YJ6WklP1-fXqQ5UFmjU8sOsItxK0vfsNTZqJ1fRDl9doWUnEytLKXqaqnvrZxDjq5J-TP_chix5HLP-wLsqaSjmySQwxhSc2TTJ8Zqxw',Nombre:'Capitulo cuatro',Categoria:'Matematicas',Duracion:'28:60'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEh7OW2gmVzKScc63FGkdI0qa7HcWHRS9NdlP09BR7fMPFQ5F4vBkol16sgH6kudD-wloai8oMXgQ4urNEQ88KwfjMfaEjCQtv3Gz5z4AczNEERr6cyhMGbmTXIKkQLqs0vVZHx4I-idhmkFS4VRmYi0Y8Yz_rOXFD5H57vQiSNra2etbU_u6p_xoLOL',Nombre:'Capitulo Cinco',Categoria:'Matematicas',Duracion:'60:60'},
      ]}
      
      renderItem={({item})=>
      
      <Pressable onPress={() => {navigation.navigate('Reproduciendo',{
          Imagen:item.key,
          NombreCap:item.Nombre,
          Canal:Canal,
          imgCa:ImagenCanal,
          D:item.Duracion
      })
      }}>
       <HStack space={3} justifyContent="flex-start" >
       <Center w={"30%"}>
       <Image size={75} resizeMode={"contain"} borderRadius={10} source={{
         uri:item.key
       }} alt="Alternate Text" />
       </Center>
       <Center w={"40%"}>
       <Text paddingLeft={5} color="white" fontSize="16" paddingTop={3}>{item.Nombre}</Text>
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