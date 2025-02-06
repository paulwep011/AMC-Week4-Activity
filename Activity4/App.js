import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const DATA = [
  {
    id: '1',
    title: 'Morning',
  },
  {
    id: '2',
    title: 'BreakFast',
  },
  {
    id: '3',
    title: 'Tootbrush',
  },
  {
    id: '4',
    title: 'FB',
  },
  {
    id: '5',
    title: 'ML',
  },
  {
    id: '6',
    title: 'HUGAS PLATO',
  },

  {
    id: '7',
    title: 'DAKOT TAE NG PUSA',
  },
  {
    id: '8',
    title: 'PAKAININ ANG PUSA ',
  },
{
    id: '9',
    title: 'TULOG',
  },

{
    id: '10',
    title: 'SUNDO SA KAPATID',
  },
{
    id: '11',
    title: 'PUNTA KAY MAMA',
  },

{
    id: '12',
    title: 'MA ANO ULAM',
  },

{
    id: '13',
    title: 'BANTAY SA TINDAHAN',
  },

{
    id: '14',
    title: 'HUGAS ULIT PLATO',
  },

{
    id: '15',
    title: 'AFTER PUMUNTA KAY MAMA MALIG',
  },

{
    id: '16',
    title: 'SOMBRADOR',
  },

{
    id: '17',
    title: 'JHON PAUL',
  },

{
    id: '18',
    title: '21',
  },

{
    id: '19',
    title: 'VALENZUELA',
  },

{
    id: '20',
    title: 'NOOD MOVIE',
  },

{
    id: '21',
    title: 'MAG HALIMAW',
  },

{
    id: '22',
    title: 'PATULOGIN ANG KAPATID NA BUNSO',
  },

{
    id: '23',
    title: 'TULALA 1HOUR',
  },
{
    id: '24',
    title: 'ABMOB',
  },

{
    id: '25',
    title: 'FOODTRIP',
  },



];


const Item = ({title}) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: 'red',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
    
    
  },
});

export default App;