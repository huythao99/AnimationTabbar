import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TabOne() {
  return (
    <View style={styles.container}>
      <Text>TabOne</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
