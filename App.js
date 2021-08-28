import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <>
      <Image
        source={{
          uri: 'https://lh3.googleusercontent.com/kv6n0foBWAWRxUBupRKFaZ7v0YAsmzEmFr1_SN4p2vW97Us4tn-NYaL74Kh8pOxDEFlbENBnkwa0SXh5W6Al-67DNFPeqcShEly-UZVqnPf9mJ28aPdSqqlHKmHY-ZKoO1PDzqpPk8b9ARLA0I4abOpnAsChvJnGU1yPokQjCUBuSc2mfR3cDiEKM3Cu-IUJWj2AkytQVn3dCrfdK4n8mE4L-LKL0WPkxwSiaXHObFnSGtaGcdizsYIEDCF9AVG4AuOwDl7QzuWHA-dbkNFzk0DM-HV1Ii9NEmx-l2f_bUVrd_eFCUFiTTdxnG70-UzygOq_fzaD2-Gt3m1rg3fvTEUO2RqvWUiyxjkpM5qG76gszfJ0Npi1PlwTFam5t9xpisFJNExL2Z0nyUDvqdo8guygfxppngOqOKH0J7NdCy27NlVOa0HGCl5m37mtkQC5MzUdbIycesNTjOc4-kU0LNB_TA4ruN1psEQMwRqCYOphEMGMo7TCLDgOFr3jRr9FcI_VelcCoLilGkea2tK8q4Qt2M-0qPBHKCi-9HCpb0W7t9vTDf6bSaegYnHfVMATA_lHOGWyXonZ6lrQsLHlI4UL-bdgeM_n2AJldg0=w518-h322-no',
          cache: 'only-if-cached',
        }}
        style={{width: 400, height: 250}}
      />
      <Text style={styles.titleText}>Nuestra Carta</Text>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <View style={{flex: 0.5, margin: 5}}>
          <Image
            source={{
              uri: 'https://imagenes.elpais.com/resizer/neqM_ZSW1PsUvG47t4tLalTQk-o=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/W232DWSRSO7AR7DSDH7N7HJA64.jpg',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom: 5}}
          />
          <Text style={styles.texto}>
            Carnes
          </Text>
          <Image
            source={{
              uri: 'https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258365_1024x576.jpg',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom: 5}}
          />
          <Text style={styles.texto}>
            Ensaladas
          </Text>
        </View>
        <View style={{flex: 0.5, margin: 5}}>
          <Image
            source={{
              uri: 'https://www.cocinayvino.com/wp-content/uploads/2020/06/Mariscos-1068x713.jpg',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom: 5}}
          />
          <Text style={styles.texto}>Mariscos</Text>
          <Image
            source={{
              uri: 'https://s1.eestatic.com/2019/04/04/ciencia/nutricion/bebidas_espirituosas-alcohol-energia_388473428_119607645_1706x1280.jpg',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom:5}}
          />
          <Text style={styles.texto}>Bebidas</Text>
        </View>
      </View>
      <View>
        <Text style={styles.alumnos}>Douglas Alberto Menjivar Quiterio</Text>
        <Text style={styles.alumnos1}>Oscar Alfredo Caceres Hernandez</Text>
      </View>
    </>
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
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFFF00'
  },
  alumnos:{
    marginTop:350,
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

export default App;
