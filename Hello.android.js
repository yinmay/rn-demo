import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
            <Text style={styles.hello}>
                    hello, Mei. this is android
              </Text>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#FFFF00',
    fontSize: 24,
  },
});
