import { View, TouchableWithoutFeedback, StatusBar, Keyboard, TextInput } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { EvilIcons } from '@expo/vector-icons';
import ListExchanges from '../components/ListExchanges';

const ExchangeScreen = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flex: 1, backgroundColor: "#fff",}}>
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
          <ListExchanges/>
        </View>
    </View>
  )
}

export default ExchangeScreen