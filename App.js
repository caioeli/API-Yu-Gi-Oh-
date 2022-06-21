import React,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const api = async(callback)=> {

  const resposta = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
  const parsed = await resposta.json();
  callback(parsed.data)
}



export default function App() {
const [registro, setregistro]= useState([]);

useEffect(()=>{
  api(setregistro);
},[]);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo} >Yu-Gi-Oh! Guide</Text>

      <FlatList
      data={registro}
      keyExtractor={(item)=> item.id.toString()}
      numColumns={0}
      renderItem = {({item})=><Text style={estilo.item}>
      Nome: {item.name} {'\n'}Tipo: {item.type}{'\n'}Desc: {item.desc} {'\n'}Race: {item.race} </Text>}
      />



      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#391837',
  },
  titulo:{
    fontSize: 40,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:30,
    marginTop:30,
  },

  item:{
    flex:1,
    paddingVertical:10,
    textAlign:'left',
    backgroundColor:'#B7990D',
    marginBottom:15,
    marginTop:15,
    marginRight:15,
    marginLeft:15,
    paddingLeft:15,
    paddingRight:15,
    fontSize: 20,
  }
});
