import React, {useState} from 'react';
import './src/translation/index';
import {Text} from 'react-native';
import RootNavigations from './src/navigations/RootNavigations';

const App = () => {
  const [loadApp, setLoadApp] = useState(false);

  setTimeout(() => {
    setLoadApp(true);
  }, 200);

  if (!loadApp) {
    return <Text>Loading .....</Text>;
  }

  return <RootNavigations />;
};

export default App;
