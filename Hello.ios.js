import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Hello = () => (
  <View>
    <Text style={styles.hello}>
                    hello, Mei this is ios
    </Text>
  </View>
);


const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#00FF00',
    fontSize: 24,
  },
});

export default Hello;

