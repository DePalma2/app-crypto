import { View, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { Component } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import ListCrypto from '../components/ListCrypto';


export class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
        <StatusBar translucent={true} backgroundColor="#84B082"/>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1, paddingHorizontal: "2%", marginTop: Constants.statusBarHeight }}>
              <View style={{ flexDirection: "row", borderWidth: 1, borderColor: "#999", borderRadius: 30, height: 50, width: "100%", justifyContent: "flex-start", alignItems: "center", paddingLeft: 20 }}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput clearButtonMode='always' selectionColor="#018E58"  clearTextOnFocus={true} placeholder='Buscar' style={{ height: 40, margin: 12, padding: 10 }}/>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ marginTop: 80 }}>
          <ListCrypto/>
        </View>
      </View>
    )
  }
}

export default HomeScreen