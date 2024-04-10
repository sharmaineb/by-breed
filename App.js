import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, Button } from 'react-native';
import Item from './Item';
import { cats, dogs } from './breeds';

export default function App() {
  const [search, setSearch] = useState('');
  const [showCats, setShowCats] = useState(true);

  const dataToShow = showCats ? cats : dogs;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
        <StatusBar style="auto" />
        <View style={styles.listContainer}>
          <FlatList 
            data={dataToShow.filter(item => item.breed.includes(search))}
            renderItem={({ item, index }) => {
              return <Item index={index} data={item} />
            }}
            keyExtractor={item => item.breed}
          />  
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.search}
            placeholder='Search'
            onChangeText={setSearch}
            value={search}
          />
          <Button
            title={showCats ? 'Show Dogs' : 'Show Cats'}
            onPress={() => setShowCats(!showCats)}
            color="#841584"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 30,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flex: 1,
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});