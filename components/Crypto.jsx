import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Crypto = ({ crypto }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCrypto}>
        <Image style={styles.img} source={{ uri: crypto.image }}/> 
        <View>
            <Text style= {styles.cryptoName}>{crypto.name}</Text>
            <Text style= {styles.cryptoSymbol}>[{crypto.symbol.toUpperCase()}]</Text>
            <Text style= {styles.textRank}>Rank: {crypto.market_cap_rank}</Text>
        </View>
      </View>
      <View style={styles.containerCurrenPrice}>
        <Text style={styles.textCurrentPrice}>$ {crypto.current_price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerCrypto: {
        flexDirection: "row",
        margin: 5
    },
    img: {
        width: 50,
        height: 50,
        marginRight: 6,
        borderRadius: 50
    },
    cryptoName: {
        fontSize: 16
    },
    cryptoSymbol: {
        marginLeft: 5,
        fontSize: 12,
        color: "#AAAAAA"
    },
    containerCurrenPrice: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    },
    textCurrentPrice: {
        fontSize: 16,
        marginRight: 10
    },
    textRank: {
      color: "#afb2b4"
    }
})

export default Crypto