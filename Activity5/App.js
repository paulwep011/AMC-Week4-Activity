import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Morning',
  },
  {
    id: '2',
    title: 'TULALA',
  },
  {
    id: '3',
    title: 'BreakFast',
  },
  {
    id: '4',
    title: 'Tootbrush',
  },
  {
    id: '5',
    title: 'FB',
  },
  {
    id: '6',
    title: 'ML',
  },
  {
    id: '7',
    title: 'HUGAS PLATO',
  },

  {
    id: '8',
    title: 'Afternoon',
  },
  {
    id: '9',
    title: 'PAKAININ ANG PUSA ',
  },
{
    id: '10',
    title: 'TULOG',
  },

{
    id: '11',
    title: 'SUNDO SA KAPATID',
  },
{
    id: '12',
    title: 'PUNTA KAY MAMA',
  },

{
    id: '13',
    title: 'MA ANO ULAM',
  },

{
    id: '14',
    title: 'BANTAY SA TINDAHAN',
  },

{
    id: '15',
    title: 'HUGAS ULIT PLATO',
  },

{
    id: '16',
    title: 'EVENING',
  },

{
    id: '17',
    title: 'SOMBRADOR',
  },

{
    id: '18',
    title: 'JHON PAUL',
  },

{
    id: '19',
    title: '21',
  },

{
    id: '20',
    title: 'VALENZUELA',
  },

{
    id: '21',
    title: 'NOOD MOVIE',
  },

{
    id: '22',
    title: 'MAG HALIMAW',
  },

{
    id: '23',
    title: 'PATULOGIN ANG KAPATID NA BUNSO',
  },

{
    id: '24',
    title: 'TULALA 1HOUR',
  },
  {
    id: '25',
    title: 'hahahahaha',
  },

];


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff'; '#20232a';
    const color = item.id === selectedId ? 'white' : 'black'; 'red';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;