import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <>
      <Image
        source={{
          uri: 'https://www.crushpixel.com/big-static16/preview4/banner-design-coffee-shop-restaurant-2306261.jpg',
          cache: 'only-if-cached',
        }}
        style={{width: 400, height: 200}}
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
              uri: 'https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=ETHiLgSlj2QsooaPSmCVyM$daE2N3K4ZzOUsqbU5sYv8Wnw$QYDSc7uiymdASjoa6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom: 5}}
          />
          <Text style={styles.texto}>
            Bebidas Frias
          </Text>
          <Image
            source={{
              uri: 'https://www.baque.com/wp-content/uploads/2017/09/Las-mejores-obras-de-arte-de-cafe-en-Instagram.jpg',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom: 5}}
          />
          <Text style={styles.texto}>
            Entradas
          </Text>
        </View>
        <View style={{flex: 0.5, margin: 5}}>
          <Image
            source={{
              uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/05/300919-cafe-mas-cafeina.jpg?itok=x6vKeIT-',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom: 5}}
          />
          <Text style={styles.texto}>Postres</Text>
          <Image
            source={{
              uri: 'https://www.discovertravelnews.com/wp-content/uploads/2018/11/cafes-1300x731.jpg',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150, marginBottom:5}}
          />
          <Text style={styles.texto}>Cafes</Text>
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
  },
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  alumnos:{
    marginTop:350,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  alumnos1:{
    marginTop:0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default ViewBoxesWithColorAndText;
