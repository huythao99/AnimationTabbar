import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TabFive() {
  return (
    <View style={styles.container}>
      <Text>TabFive</Text>
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
