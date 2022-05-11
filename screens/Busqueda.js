import React, { useState, useEffect } from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,SafeAreaView,FlatList,StyleSheet, View } from "react-native";
import { SearchBar } from 'react-native-elements';
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
const Busqueda=({navigation})=>{ 
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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
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
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
     
      
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