import React, {useState, useEffect} from "react";
import axios from "axios";
import Crypto from "./Crypto";
import {API_URL} from "@env"
import { Text, View, Image, ScrollView, FlatList} from 'react-native'

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
    )  
    }   
