import React,{useState} from 'react';
import { Fab } from "native-base";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,
  Icon,Pressable,cursor, Box,VStack,FormControl,AntDesign,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    const [selected, setSelected] =React.useState(1);
    const Home = () =>{ 
    navigation.navigate('Home',{una:'1'})
    console.log("Home",selected)
    
    }
  
    const Buscar = () =>{ 
      
      navigation.navigate('Buscar')
      console.log("Buscar",selected)
    
      }
      const Guardados = () =>{ 
      
        navigation.navigate('Guardados')
        console.log("Guardados",selected)
      
        }
    return <NativeBaseProvider>
        <Box flex={1}  safeAreaTop width="100%" maxW="500px" alignSelf="center">
          <Center flex={1}></Center>
          <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
            <Pressable opacity={selected ===  1 ? 1 : 0.5} py="3" flex={1} onPress={Home}>
              <Center>
                <Icon   mb="1" as={<MaterialCommunityIcons name={selected === 0 ? "home" : "home-outline"} />} color="white" size="sm" />
               
                <Text color="white" fontSize="12">
                  Inicío
                </Text>
              </Center>
            </Pressable>
            <Pressable  opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={Buscar}>
              <Center>
                <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Buscar
                </Text>
              </Center>
            </Pressable>
            <Pressable opacity={selected ===  1 ? 1 : 0.6} py="2" flex={1} onPress={Guardados}>
              <Center>
                <Icon  mb="1" as={<MaterialCommunityIcons name={selected === 2 ? "bookmark" : "bookmark-outline"} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Guardados
                </Text>
              </Center>
            </Pressable>
            
          </HStack>
        </Box>
      </NativeBaseProvider>;
  };
  export default  Footer 
