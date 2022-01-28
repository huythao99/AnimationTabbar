import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TabThree() {
  return (
    <View style={styles.container}>
      <Text>TabThree</Text>
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
