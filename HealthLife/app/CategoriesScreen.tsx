import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Categories</Text>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>Sleep</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>Cycle Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>Medications</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f4fc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryText: {
    fontSize: 18,
    color: '#333',
  },
});
