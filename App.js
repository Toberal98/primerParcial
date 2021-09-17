import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/view/menu'
import Details from './src/view/details'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen  options={{headerShown: false}} name="Home" component={Menu} />
         <Stack.Screen   name="Menus" component={Details} />
       </Stack.Navigator>
     </NavigationContainer>
  );
};


export default App;
