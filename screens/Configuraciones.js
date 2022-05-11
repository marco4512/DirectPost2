import * as React from 'react';
import { Fab } from "native-base";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,
  Icon,Pressable,cursor, Box,VStack,FormControl,AntDesign,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
const Config = () => {

  const navigation = useNavigation();
  const ConfigPaG = () =>{ 
      
    navigation.navigate('ConfigPaG')
    console.log("ConfigPaG")
  
    }
    return <Center>
        <Box height="130" w="450"  >
          <Fab onPress={ConfigPaG} renderInPortal={false} right={70} bottom={50} size="55" bg="indigo.600"
          icon={<Icon color="white" as={<MaterialCommunityIcons name="cog" />} size="7" />} />
        </Box>
      </Center>;
  };
  export default  Config 