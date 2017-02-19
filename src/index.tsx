import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
      />
      <Text style={styles.text}>React Native Typescript</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#294E80',
  } as ViewStyle,
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  } as ViewStyle,
});
