import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native';

export default function MenstrualCycleScreen() {
  const [lastCycle, setLastCycle] = useState<string | null>('2024-11-02');
  const [daysSinceLastCycle, setDaysSinceLastCycle] = useState<number | null>(null);

  useEffect(() => {
    if (lastCycle) {
      const days = Math.floor((new Date().getTime() - new Date(lastCycle).getTime()) / (1000 * 60 * 60 * 24));
      setDaysSinceLastCycle(days);
    }
  }, [lastCycle]);

  const recordCycle = () => {
    const today = new Date().toISOString().split('T')[0];
    setLastCycle(today);
    Alert.alert('Sucesso', 'Ciclo registrado com sucesso!');
  };

  return (
    <ImageBackground source={require('../src/Cycle.png')} style={styles.background}>
      <Text style={styles.title}>Monitoramento do Ciclo</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.recordButton} onPress={recordCycle}>
          <Text style={styles.buttonText}>Registrar Novo Ciclo</Text>
        </TouchableOpacity>
        {lastCycle && (
          <View style={styles.cycleInfo}>
            <Text style={styles.infoText}>
              Último Ciclo: <Text style={styles.infoValue}>{lastCycle}</Text>
            </Text>
            <Text style={styles.infoText}>
              Dias desde o último ciclo: <Text style={styles.infoValue}>{daysSinceLastCycle}</Text> dias
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    position: 'absolute',
    top: 40,
    left: 20,
    letterSpacing: 0.5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  recordButton: {
    backgroundColor: '#c5a7db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  cycleInfo: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  infoValue: {
    fontWeight: '600',
    color: '#34495e',
  },
});
