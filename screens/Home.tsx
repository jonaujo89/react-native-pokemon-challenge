import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core'

import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

import { NavProps } from '.'

type HomeNavProps = NavProps<'Home'>

const HomeScreen = () => {
  const navigation = useNavigation<HomeNavProps>()
  useEffect(() => {
    PokemonTCG.findSetsByQueries({ orderBy: 'id', pageSize: 10 }).then(sets => {
      console.log('sets', sets)
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="View Details" onPress={() => {
        navigation.navigate('SetDetails', { setID: null })
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
