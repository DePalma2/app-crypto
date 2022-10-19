import { View, Text, StyleSheet, Image, Button, Linking, Pressable  } from 'react-native'
import React from 'react'

const Exchange = ({ exchange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerExchange}>
        <Image style={styles.img} source={{ uri: exchange.image }}/> 
        <View>
            <Text style= {styles.exchangeName}>{exchange.name}</Text>
            
            <Text style= {styles.textRank}>Rank: {exchange.trust_score_rank}</Text>
        </View>
      </View>
      <View style={styles.btnUrlContainer}>
        <Pressable style={styles.btnUrl} onPress={() => { Linking.openURL(exchange.url) }}>
          <Text style={styles.btnUrlText}>Visitar</Text>
        </Pressable>
      </View>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      justifyContent: "space-between"
  },
  containerExchange: {
      flexDirection: "row",
      margin: 5
  },
  img: {
      width: 50,
      height: 50,
      marginRight: 6,
      borderRadius: 50
  },
  exchangeName: {
      fontSize: 16
  },
  btnUrlContainer: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
  },
  btnUrl: {
    borderRadius: 50,
    backgroundColor: "#84B082",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnUrlText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: 0.25,
    lineHeight: 21,
    fontSize: 14
  },  
  textRank: {
    color: "#afb2b4"
  }
})

export default Exchange