import React from 'react';
import {View, Text, Image, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import datos from '../../store/store';
const Menu = ({navigation}) => {

  return (
    <ScrollView >
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <Image
        source={{
          uri: 'https://lh3.googleusercontent.com/kv6n0foBWAWRxUBupRKFaZ7v0YAsmzEmFr1_SN4p2vW97Us4tn-NYaL74Kh8pOxDEFlbENBnkwa0SXh5W6Al-67DNFPeqcShEly-UZVqnPf9mJ28aPdSqqlHKmHY-ZKoO1PDzqpPk8b9ARLA0I4abOpnAsChvJnGU1yPokQjCUBuSc2mfR3cDiEKM3Cu-IUJWj2AkytQVn3dCrfdK4n8mE4L-LKL0WPkxwSiaXHObFnSGtaGcdizsYIEDCF9AVG4AuOwDl7QzuWHA-dbkNFzk0DM-HV1Ii9NEmx-l2f_bUVrd_eFCUFiTTdxnG70-UzygOq_fzaD2-Gt3m1rg3fvTEUO2RqvWUiyxjkpM5qG76gszfJ0Npi1PlwTFam5t9xpisFJNExL2Z0nyUDvqdo8guygfxppngOqOKH0J7NdCy27NlVOa0HGCl5m37mtkQC5MzUdbIycesNTjOc4-kU0LNB_TA4ruN1psEQMwRqCYOphEMGMo7TCLDgOFr3jRr9FcI_VelcCoLilGkea2tK8q4Qt2M-0qPBHKCi-9HCpb0W7t9vTDf6bSaegYnHfVMATA_lHOGWyXonZ6lrQsLHlI4UL-bdgeM_n2AJldg0=w518-h322-no',
          cache: 'only-if-cached',
        }}
        style={{width: '100%', height: 200}}
      />
      <Text style={styles.titleText}>Nuestra Carta</Text>
      <View
        style={[styles.container, {
          flexDirection: "row",
              flexWrap: "wrap",
        }]}>
        {
          datos.menu.map(m=><View style={styles.card} key={m.id}>
            <TouchableOpacity onPress={() => navigation.navigate('Menus',{
              itemId:m.id
            })}>
              <Image
                source={{
                  uri: m.url,
                  cache: 'only-if-cached',
                }}
                style={{width: '100%', height: 150}}
              />
              </TouchableOpacity>
              <Text style={styles.texto}>
                {m.texto}
              </Text>
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
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'#212F3D'
  },
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFF00'
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

export default Menu;
