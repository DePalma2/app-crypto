import React, {useState, useEffect} from "react";
import axios from "axios";
import Crypto from "./Crypto";
import {API_URL} from "@env"
import { View, FlatList } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function () {   
    const [listCrypto, setListCrypto] = useState([]);

    useEffect (() => {
        axios.get(API_URL)
        .then((response) => {
            setListCrypto(response.data);
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
                data={listCrypto}
                initialNumToRender={listCrypto.length}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => {
                    return (
                        <Crypto crypto={item}/>
                    )
                }}
            />
        </View>
        </Animatable.View>
    )  
    }   
