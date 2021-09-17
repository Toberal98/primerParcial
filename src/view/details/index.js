import React from 'react';
import {View, Text, Image, StyleSheet,ScrollView} from 'react-native';
import { Button, Card, Title, Paragraph,Divider } from 'react-native-paper';
import datos from '../../store/store';



const Details = ({route}) => {
  const { itemId } = route.params;
  var tieneImagen = false;
  const detalle = datos.menu.filter(d=> d.id === itemId)[0];

     if(detalle.menuseses[0].imagen !== undefined){
       tieneImagen = true;
     }
     const styles = StyleSheet.create({
       baseText: {
         fontFamily: 'Cochin',
       },
       titleText: {
         fontSize: 40,
         fontWeight: 'bold',
         textAlign: 'center',
         marginTop: 10,
         color:'#008f39'
       },
       menuses:{
         padding:5
       },
       container: {
         flex: 1,
         padding: 10,
         backgroundColor:'#212F3D'
       },
       nombre:{
         color: '#ff6600'
       },
       descripcion:{
         color:'white'
       },
       precio:{
         color:'#67CE48',
         fontSize:30,
         paddingLeft:((tieneImagen === true)?'0%':'40%')
       },
       card:{
         margin:10,
         width:'43%'
       },
       alumnos:{
         fontSize: 20,
         fontWeight: 'bold',
         textAlign: 'center',
         color:'#ff6600'
       },
       alumnos1:{
         marginTop:0,
         fontSize: 20,
         fontWeight: 'bold',
         textAlign: 'center',
         color: '#ff6600'
       }
     });
  return (
    <ScrollView >
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <Image
        source={{
          uri: detalle.url,
          cache: 'only-if-cached',
        }}
        style={{width: '100%', height: 200}}
      />
      <Text style={styles.titleText}>{detalle.texto}</Text>
      <View
        style={[styles.container, {
          flexDirection: "column",
              flexWrap: "wrap",
        }]}>
        {
          detalle.menuseses.map(m=><View key={m.id} style={styles.menuses}>

              <Title style={styles.nombre}>
                {m.nombre}
              </Title>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:(tieneImagen === true)?'column':'row'}}>
              <Paragraph style={styles.descripcion}>
                {m.descripcion}
              </Paragraph>
              <Text style={styles.precio}>
                ${m.precio}
              </Text>

              </View>
              {
                ((tieneImagen === true)?<Image
                    source={{
                      uri: m.imagen,
                      cache: 'only-if-cached',
                    }}
                    style={{width: 200, height: 150, marginLeft:20}}
                  />
                   :<></>)
              }
            </View>
            <Divider />
          </View>
            )
        }
      </View>
      <View>
        <Text style={styles.alumnos}>Douglas Alberto Menjivar Quiterio</Text>
        <Text style={styles.alumnos1}>Oscar Alfredo Caceres Hernandez</Text>
      </View>
    </View>
    </ScrollView>
  );
};


export default Details;
