import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

import colors from '../theme/colors';
import commonStyles from '../theme/styles/commonStyles';
import dimensions from "../theme/dimensions";

const Card = ({ item }) => {
    const { name, title, description } = item;
    // console.log('here', item)
    return (<View>
        <View style={styles.content}>
            <View style={styles.rowContent}>
                <Text style={styles.head}>Title</Text>
                <Text>{title}</Text>
                <Text style={styles.head}>Posted by</Text>
                <Text>{name}</Text>
                 <Text style={styles.head}>Description</Text>
                <Text style={styles.text}>{description}</Text>
            </View>
        </View>
    </View>)
}


export default Card

const styles = StyleSheet.create({
    content: {
        marginTop: dimensions.twenty,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    rowContent: {
        flexDirection: 'column',
        marginLeft: dimensions.ten,
        marginBottom: dimensions.ten
    },
    containerWidth: {
        width: '30%'
    },
    firstWidth: {
        width: '10%'
    },
    text: {
      color:'#808080'
    },
    lastWidth: {
        width: '45%'
    },
    head:{
        fontWeight:'bold',
        marginTop: dimensions.ten,
        color: '#423f3f'
    }

})