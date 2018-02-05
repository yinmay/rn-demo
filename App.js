

import Expo from 'expo';
import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
// import Hello from './Hello'
import { Container, Content } from 'native-base';
import Head from './ui/Head';
import Values from './ui/Values';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tip: 0.15,
      isready: false,

    };
  }


  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ isready: true });
  }
  updateCustomTip(customTip) {
    // if(Platform.OS === 'android'){

    // }
    // if(Platform.OS === 'ios'){

    // }
    if (customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100,
      });
    } else {
      this.setState({ tip: 0 });
    }
  }
  // alert() {
  //   Alert.alert(
  //     ' hi',
  //     null,
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => console.log('hit ok'),
  //       },
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('hit cancel'),
  //         style: 'cancel',
  //       },
  //     ],

  //   );
  // }
  render() {
    if (!this.state.isready) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Head />
        <View style={styles.container}>
          <Content style={{ width: '100%' }}>
            <Values
              tipPercent={this.state.tip}
              bill={this.state.inputValue}
            />
            <TextInput
              style={styles.input}
              value={this.state.inputValue}
              placeholder="0.00"
              underlineColorAndroid="#FFF"
              placeholderTextColor="#FFF"
              keyboardType="numeric"
              onChangeText={text => this.setState({ inputValue: text })}
            />
            <View style={styles.buttonGroup}>
              <Button title="15%" onPress={() => this.setState({ tip: 0.15 })} />
              <Button title="20%" onPress={() => this.setState({ tip: 0.2 })} />
              <Button title="25%" onPress={() => this.setState({ tip: 0.25 })} />
              <TextInput
                style={styles.customTip}
                value={(this.state.tip * 100).toString()}
                placeholder="15%"
                underlineColorAndroid="#FFF"
                placeholderTextColor="#FFF"
                keyboardType="numeric"
                onChangeText={customTip => this.updateCustomTip(customTip)}
              />

            </View>
          </Content>
        </View>
      </Container>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'column',
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    // borderColor:'#333',
    // borderWidth:1,
    padding: 5,
    color: '#FFF',

  },
  buttonGroup: {
    // padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
    color: '#FFF',
  },
});
