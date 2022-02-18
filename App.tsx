import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from "@react-navigation/native";
import {TabNavigator} from "./src/navigation/TabNavigator";
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [] )

  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
};

export default App;
