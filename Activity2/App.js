import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.boldText}> PAUL</Text>
        <Text style={styles.italicText}> SOMBRADOR</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    
  },
  title: {
    borderWidth: 4,
    borderColor: '#20232a',
    color: '#20232a',
    borderRadius: 6,
    backgroundColor: 'red',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
    

  },

  boldText: {
    fontWeight: 'bold',
    
  },
  italicText: {
    fontStyle: 'italic',
  },
});

export default App;