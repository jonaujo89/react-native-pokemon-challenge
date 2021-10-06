import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/core'

import { RouteProps } from '.'

type SetDetailsRouteProps = RouteProps<'SetDetails'>

const Details = () => {
  const route = useRoute<SetDetailsRouteProps>()
  const { setID } = route.params ?? {}
  return (
    <View style={styles.container}>
      <Text>{setID ?? 'No Set Selected'}</Text>
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

export default Details
