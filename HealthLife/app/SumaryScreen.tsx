import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function SummaryScreen({ navigation }) {
  return (
    <ImageBackground source={require('../src/1.png')} style={styles.background}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sleep</Text>
          <Text style={styles.cardSubtitle}>Time in bed: 6hr 52min</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cycle Tracking</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('MenstrualCycle')}>
            <Text style={styles.buttonText}>Go to Cycle Tracking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(252, 252, 242, 0.8)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fcfcd2',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#b230e6',
    fontSize: 16,
  },
});


