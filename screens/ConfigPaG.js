import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,Slider, Box,VStack,Pressable,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
import {auth} from '../firebase';
import {db} from '../firebase';
const ConfigPaG=({navigation})=>{ 
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEiali7WU-43F4nIBs-TF-c1Xq1nFGk_4VdrMbzKW1f3sg0U5Z6oYyGJuhCTuxv4ka4QbEezEIajB9VW73TnCkvFZUwobGQhe8Lb81kSitd8yvbq-Lcqc3ZgpB1ebzhuOdvaSZ08TG8ca98a5qF0T7UT-kbfTNmQ_9owgzOus10PBy3AUcep-KrahDgo=w436-h654" };
  const [selected, setSelected] =React.useState(0);
  const [isHidden, setIsHidden] = useState(false)
  const [isHidden1, setIsHidden1] = useState(false)
  const [isHidden2, setIsHidden2] = useState(false)
  const [isHidden3, setIsHidden3] = useState(false)
  const handleClick = () => setIsHidden (!isHidden)
  const handleClick1 = () => setIsHidden1 (!isHidden1)
  const handleClick2 = () => setIsHidden2 (!isHidden2)
  const handleClick3 = () =>{ConfIdioma(); setIsHidden3 (!isHidden3); }
  const [Idioma, setIdioma] = useState([]);
  const [users,setUsers]=useState([]);
  useEffect(() => {
    console.log(auth.currentUser.email)
    let correo = ""+auth.currentUser.email
    db.collection('usr').where("email", "==", correo).get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
        });
        setUsers([...Usuario]);
      });
    
    db.collection('Idioma').where("email", "==", correo).get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
        });
        setIdioma([...Usuario]);
        Usuario?setIsHidden3 (!isHidden3):setIsHidden3(isHidden3)
        console.log(isHidden3)
      });
     
  }, []);
 
  const ConfIdioma =()=>{
    let correo = ""+auth.currentUser.email
    console.log(correo)
    db.collection('Idioma').where("email", "==",correo.toLocaleLowerCase()).where("Idioma", "==",isHidden3).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          doc.ref.delete();
      });
    });
    db.collection("Idioma").add({
        email: correo,
        Idioma:(!isHidden3)
    })
    .then((docRef) => {
        console.log("Registrado En me Gusta: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    db.collection('Idioma').where("email", "==", correo.toLocaleLowerCase()).get()
      .then(querySnapshot => {
        const Usuario = [];
        querySnapshot.forEach(doc => {
          Usuario.push(doc.data());
        });
        setIdioma([...Usuario]);
      });
    
  }
  
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
        <Text color="white" fontSize="50" paddingTop={10}>{isHidden3 ? "Settings" : "Configuración"}</Text>
      </Center>
      <ScrollView maxHeight={550} >
      <HStack space={3} justifyContent="center" >
      <Center paddingRight={1}>
      <Image size={70} resizeMode={"contain"} borderRadius={100} source={FotoUsuario} alt="Alternate Text" />
      </Center>
      <Center  paddingLeft={1}>
          <VStack space={2} alignItems="flex-start">
          <Center>
          {users.length ? (
        users.map(book => ( <Text color="white" key={book.email} textAlign="center" fontSize="20">{book.name}</Text>
        ))
      ) : (
        <Text color="white" fontSize="20" paddingTop={3}></Text>
      )}
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>{isHidden3 ? "Account" : "Ver Perfil"}</Text>
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
          <Text color="white" fontSize="20" paddingTop={3}>{isHidden3 ? "Download only the audio" : "Descargar solo el audio"}</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>{isHidden3 ? "Save only audio from video podcasts" : "Guardar solo el audio de los podcast de video"}</Text>
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
          <Text color="white" fontSize="20" paddingTop={3}>{isHidden3 ? "Play only the audio" : "Reproducir solo el audio"}</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>{isHidden3 ? "Play only audio from podcasts" : "Reproducir solo el audio de los podcast"}</Text>
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
          <Text color="white" fontSize="20" paddingTop={3}>{isHidden3 ? "Admit Recommendations" : "Permitir Recomendaciones"}</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>{isHidden3 ? "Allow Direct Post to recommend a podcast for you" : "Permitir que Direct Post recomiende podcast para ti"}</Text>
          </Center>
        </VStack>
      <Center w={"40%"} paddingLeft={10} >
      <Pressable borderWidth={0} onPress={handleClick2} >
      <Icon   mb="1" as={<MaterialCommunityIcons name={isHidden2 ? "toggle-switch" : "toggle-switch-off-outline"} />} color="white" size="xl" />
      </Pressable>
      </Center>
    </HStack>
    <HStack space={2} paddingTop={5} justifyContent="flex-start" >
      <VStack space={2} paddingLeft={1} marginLeft={0} w={"60%"} alignItems="flex-start">
          <Center>
          <Text color="white" fontSize="20" paddingTop={3}>{isHidden3 ? "Change language" : "Cambiar Idìoma"}</Text>
          </Center>
          <Center>
          <Text color="white" fontSize="16" paddingTop={0}>{isHidden3 ? "Translate Content headers to English" : "Traducir Cabezeras de contenido a ingles"}</Text>
          </Center>
        </VStack>
      <Center w={"40%"} paddingLeft={10} >
      <Pressable borderWidth={0} onPress={handleClick3} >
      <Icon   mb="1" as={<MaterialCommunityIcons name={ isHidden3 ? "toggle-switch" : "toggle-switch-off-outline"} />} color="white" size="xl" />
      </Pressable>
      </Center>
    </HStack>
    <Center w="100%"> 
        <Text color="white" fontSize="30" paddingTop={5}>{isHidden3 ? "Maximum Volume" : "Volumen Máximo"}</Text>
        <Text color="white" fontSize="16" paddingTop={5}>{isHidden3 ? "Set the maximum volume" : "Configura el volumen maximo de reproducción"}</Text>
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
      <Text color="white" fontSize="30" paddingTop={5}>{isHidden3 ? "Sign off" : "Cerrar Seciòn"}</Text>
      </Pressable>
    </ScrollView>
      <Footer></Footer>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
export default ConfigPaG;