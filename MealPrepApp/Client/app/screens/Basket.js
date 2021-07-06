import React, { useState, useEffect } from 'react';

import {View, Text, StyleSheet, SafeAreaView, Image} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants';

function Basket({ route, navigation }) {

    const [company, setCompany] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [menu, setMenu] = useState(null);

    console.log(orderItems);

    useEffect(() => {
        let { company, orderItems, menu } = route.params; 
        setCompany(company);
        setOrderItems(orderItems);
        setMenu(menu.setMealList);
        // console.log(orderItems);
    }, [])

    function getOrderDetails() {
        const order = orderItems.map(item => {
            return (
                <View
                style={{ alignItems: 'center', 
                flex: 1, flexDirection: "row", 
                justifyContent: "space-evenly" }}
                key={item => `${item.id}`}
                >
                    <Text style={{
                        flex: 0.75
                    }}>{item.name.name} x {item.qty}</Text>
                    <Image
                        source={{uri: item.name.imageUrl}}
                        resizeMode="contain"
                        style={{
                            width: SIZES.width/2,
                            height: "100%",
                            borderRadius:20,
                            flex: 0.25
                        }}
                    />
                </View>
            )
        })
        return order;
    }
          
    return (
        <SafeAreaView style={styles.container}>
            <Text>Basket Screen</Text>
            <Text>{company?.name}</Text>
            {/* <Text> ? { orderItems[0].id} : null </Text> */}
            {getOrderDetails()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    }
})

export default Basket;