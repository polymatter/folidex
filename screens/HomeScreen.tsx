import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types/navigation';
import GoogleSignIn from '../components/GoogleSignInButton';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <GoogleSignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});