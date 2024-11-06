import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../src/2.png')} style={styles.background}>
      <Image style={styles.logo2} source={require('../src/HealthLife.png')}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Summary')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#c7c7c7',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  logo2: {
    width: 320,
    height: 320,
    borderRadius: 40,
  }
});
