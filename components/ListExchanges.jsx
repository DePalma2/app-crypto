import React, {useState, useEffect} from "react";
import axios from "axios";
import { API_URL_EXCHANGE } from "@env"
import { View, Text, FlatList } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Exchange from "./Exchange";

const ListExchanges = () => {

    const [listExchange, setListExchange] = useState([]);

    useEffect (() => {
        axios.get(API_URL_EXCHANGE)
        .then((response) => {
            setListExchange(response.data);
        })
        .catch((error) => { 
            console.error(error); 
        })
    }, [])


  return (
    <Animatable.View
            animation="fadeInUp"
            duration={1000}
            delay={1000}
    > 
        <View style={{marginTop: 20}}>
            <FlatList 
                data={listExchange}
                initialNumToRender={listExchange.length}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => {
                    return (
                        <Exchange exchange={item}/>
                    )
                }}
            />
        </View>
    </Animatable.View>
  )
}

export default ListExchanges