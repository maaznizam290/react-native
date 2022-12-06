/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useState} from 'react';
import styles from './styling';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Home from './home';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function App() {
  return (
    <>
      <View>
        <Home />
      </View>
    </>
  );
}
export default App;
