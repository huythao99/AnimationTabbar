import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TabTwo() {
  return (
    <View style={styles.container}>
      <Text>TabTwo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
