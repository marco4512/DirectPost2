import React, { useState, useEffect } from 'react';
import {MaterialCommunityIcons,MaterialIcons,Ionicons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,SafeAreaView,FlatList,StyleSheet, View } from "react-native";
import {auth} from '../firebase';
import {db} from '../firebase';
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
const Busqueda=({navigation})=>{ 
  const [Buscando,setBuscando]= useState('')
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

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    db.collection('Educacion-Cap').get()
    .then(querySnapshot => {
      const Usuario = [];
      querySnapshot.forEach(doc => {
        Usuario.push(doc.data());
      });
      setMasterDataSource([...Usuario]);
    });
  }, []);

  const searchFilterFunction = (text) => {
    console.log(text)
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        console.log(search)
        const itemData = item.NombreCap
          ? item.NombreCap
          : '';
        const textData = text;
        console.log(textData)
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      console.log(newData)
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

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
      <Text color="white" fontSize="25">Buscar</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Center>
      <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        <Input  onChangeText={
                 text => searchFilterFunction(text)
               }
               placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      </VStack>
      </VStack>
      </Center>
      <ScrollView  maxHeight={500}>
      <Divider my="2" />
     <FlatList margin={0}  refreshing data={filteredDataSource}
      renderItem={({item})=>
      <ScrollView maxHeight={550} >
      <Pressable onPress={() => {navigation.navigate('Reproduciendo',{
          Imagen:item.imgCap,
          NombreCap:item.NombreCap,
          Canal:item.Canal,
          imgCa:item.imgCap,
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
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    itemStyle: {
      padding: 10,
    },
  });
export default Busqueda;