import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Tabs from './app/navigation/tabs';

/*Bottom tab navigation bar bliver brugt i en NavigationContainer her.*/
const App = () => {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
};

export default App;







