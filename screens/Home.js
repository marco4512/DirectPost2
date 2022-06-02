import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Divider,Icon, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, Touchable,TouchableOpacity, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
import { useNavigation } from '@react-navigation/native';
import { Height } from "@mui/icons-material";
import {db} from '../firebase';
import {auth} from '../firebase';
export{Footer,Config};
const Home=({navigation,route})=>{ 
  const [Basquet, setBasquet] = useState([]);
  const [Futbol, setFutbol] = useState([]);
  const [data, setData] = useState([]);
  const [fisi, setfisi] = useState([]);
  const [Ciencia, setCiencia] = useState([]);
  const [Español, setEspañol] = useState([]);
  const [Filosofia, setFilosofia] = useState([]);
  const [Tenis, setTenis] = useState([]);
  const [Formula, setFormula] = useState([]);
  const [UFC, setUFC] = useState([]);
  const [Cine, setCine]=  useState([]);
  const [Farandula, setFarandula]=  useState([]);
  const [Literatura, setLiteratura]=  useState([]);
  const [Comedia, setComedia]=  useState([]);
  const [Computo, setComputo]=  useState([]);
  const [Programacion, setProgramacion]=  useState([]);
  const [Gaming, setGamin]=  useState([]);
  const [IA, setIA]=  useState([]);
  const [Idioma, setIdioma] = useState([]);
  useEffect(() => {
    console.log("hola:D")
    let correo = ""+auth.currentUser.email
    db.collection('Idioma').where("email", "==", correo).get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
        });
        setIdioma([...Usuario]);
      });
    db.collection('Educacion').where("Catego", "==", "Matematicas").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data())
        });
        setData([...Usuario])
        ;
      });
      db.collection('Educacion').where("Catego", "==", "Fisica").get()
      .then(querySnapshot => {
        const ciencia = [];
        querySnapshot.forEach(doc => {
          ciencia.push(doc.data());
          console.log(doc.data())
        });
        setfisi([...ciencia])
        ;
      });
      db.collection('Educacion').where("Catego", "==", "Ciencias").get()
      .then(querySnapshot => {
        const fisica = [];
        querySnapshot.forEach(doc => {
          fisica.push(doc.data());
          console.log(doc.data())
        });
        setCiencia([...fisica])
        ;
      });
      db.collection('Educacion').where("Catego", "==", "Español").get()
      .then(querySnapshot => {
        const español = [];
        querySnapshot.forEach(doc => {
          español.push(doc.data());
          console.log(doc.data())
        });
        setEspañol([...español])
        ;
      });
      db.collection('Educacion').where("Catego", "==", "Filosofia").get()
      .then(querySnapshot => {
        const filosofia = [];
        querySnapshot.forEach(doc => {
          filosofia.push(doc.data());
          console.log(doc.data())
        });
        setFilosofia([...filosofia])
        ;
      });
    db.collection('Deporte').where("Catego", "==", "Basquetbol").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data())
        });
        setBasquet([...Usuario])
        ;
      });
      db.collection('Deporte').where("Catego", "==", "Futbol").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setFutbol([...Usuario])
        ;
      });
      db.collection('Deporte').where("Catego", "==", "Tenis").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setTenis([...Usuario])
        ;
      });
      db.collection('Deporte').where("Catego", "==", "Formula 1").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setFormula([...Usuario])
        ;
      });
      db.collection('Deporte').where("Catego", "==", "UFC").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setUFC([...Usuario])
        ;
      });
      db.collection('Entretenimiento').where("Catego", "==", "Cine").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setCine([...Usuario])
        ;
      });
      db.collection('Entretenimiento').where("Catego", "==", "Farandula").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setFarandula([...Usuario])
        ;
      });
      
      db.collection('Entretenimiento').where("Catego", "==", "Literatura").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setLiteratura([...Usuario])
        ;
      });
      db.collection('Entretenimiento').where("Catego", "==", "Comedia").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setComedia([...Usuario])
        ;
      });
      
      db.collection('Tecnologia').where("Catego", "==", "Computo").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setComputo([...Usuario])
        ;
      });
      db.collection('Tecnologia').where("Catego", "==", "Programacion").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setProgramacion([...Usuario])
        ;
      });
      db.collection('Tecnologia').where("Catego", "==", "Gaming").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setGamin([...Usuario])
        ;
      });
      db.collection('Tecnologia').where("Catego", "==", "IA").get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
          console.log(doc.data());
        });
        setIA([...Usuario])
        ;
      });
  }, []);
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
    },
    Image2:{
      width: "100%",
      height:"100%"
    },

   
  });
 
  return (
   
    <NativeBaseProvider >
       
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <HStack space={3} paddingTop={10} justifyContent="flex-start">
      <Center w={"30%"}>
      </Center>
      <Center w={"40%"}>
      <Text color="white" fontSize="25">{Idioma?"Topics":"Topícos"}</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Divider my="2" />
     <Center w="100%"> 
     <Text color="white" fontSize="27" >{Idioma?"what would you like to listen?":"¿Què te gustarìa escuchar?"}</Text>
     <Text color="white" fontSize="30"></Text>
      </Center>
      
      <HStack space={2} paddingTop={5} justifyContent="center">
      <Center>
      <TouchableOpacity>
      <Button variant="unstyled" h="150" w="180" onPress={() => navigation.navigate('Sugerencias',{
        Suge:"Educacion",
        fisi:fisi,
        Ciencia:Ciencia,
        Español:Español,
        Filosofia:Filosofia,
        data:data
      })}><Image borderRadius={10} source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEhajnl7c1AaMTKVH2STAYcqao423P_pmpPLnYlMpxt8GbzSXI9_gwEqp18lX6u0AIGNTTnkWgeQLqbuTO9w6XEDQJsc4p7LUfJwErZCRHGLtOEQbfMN42LQhBOHZc6WFZPT3zGtwI2qZiwUXnVHURWXBjPvwpab5qAvilhKl0fhYzW-9mTlvAjFPV-x"
    }} alt="Alternate Text" size={150}/></Button>
      </TouchableOpacity>
      </Center>
      <Center>
      <Button variant="unstyled" h="150" w="180" onPress={() => navigation.navigate('Deportes',
      {Suge:"Deportes"
      ,Basquet:Basquet,
      Futbol:Futbol,
      Tenis:Tenis,
      Formula:Formula,
      UFC:UFC
    })}><Image borderRadius={10} resizeMode="cover"  source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEgU1m0FWkCETWyyQaqAAV6j48ZI_3xY3l-IL2n9whbQcshaOoVCUYAOdykJ6acprKqYVYoamcip2ROHyQ-WmAwhZdVqPtMcj_Z4ZoDVvtin_xcLCfHIjhhqt6v7hQI_Tg47WSGkXBjlSg-qRLtF2c4ROV95r_inrGluHsIPjo7iVzjRkCegcFdF2D3Y"
      }} alt="Alternate Text" width={"170"}  height={"150"} /></Button>
      </Center>
      </HStack>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <HStack space={2} justifyContent="center">
      <Center>
      <Button variant="unstyled" h="150" w="180" onPress={() => navigation.navigate('Entretenimiento',
      {Suge:"Entretenimiento",
      Cine:Cine,
      Farandula:Farandula,
      Literatura:Literatura,
      Comedia:Comedia
        })}><Image borderRadius={10} source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEigAp4iT8vcrnwaiRRlFXzKceuc-SniqHjoY3x8kxa4Yy6mbEdpKLJy5aDCAC0Hp0d9g4sXm5jy_vW_obqx9MUXsGucHH5LuEGcr6RsXwSeVnQswL3UlqYxN1kz9TSAtY9nn6f5SCATOw6uafwe1o23SqQP2DCYmRpGtdKa9bKs9qC51rfECDkvpRDQ"
      }} alt="Alternate Text" width={"170"}  height={"150"}/></Button>
      </Center>
      <Center>
      <Button variant="unstyled" h="150" w="180"  onPress={() => navigation.navigate('Tecnologia',
      {Suge:"Tecnologia",
      Computo:Computo,
      Programacion:Programacion,
      Gaming:Gaming,
      IA:IA
    })}><Image borderRadius={10}  source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEjnYOPGlLy8Fy_GnsOizig8GrBFZfbjYMxgwRkjUA2NRiMHt7PMjg8atCN4iNFF1POFnPP7h4E5oq8ZBnQ28oE183rgCugTaoQ6LX_JZwJBr7qgFfSDwviBsa54FkeywknBRnEewjiByxvOdsrtG8f28hzw6wqNVwECNkpg65qv36yd9MZM1giVAojG"
      }} alt="Alternate Text" size={150}/></Button>
      </Center>
      </HStack>
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Home;