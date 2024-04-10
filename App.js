import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import Item from './Item';
import { cats } from './breeds';

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
      <StatusBar style="auto" />
      <View style={styles.listContainer}>
        <FlatList 
          data={cats.filter(item => item.breed.includes(search))}
          renderItem={({ item, index }) => {
            return <Item index={index} data={item} />
          }}
          keyExtractor={item => item.breed}
        />  
      </View>
      <View>
      <TextInput 
        style={styles.search}
        placeholder='Search'
        onChangeText={setSearch}
        value={search}
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
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
  }
});