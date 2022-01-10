import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from "react-native";

import colors from '../theme/colors';
import commonStyles from '../theme/styles/commonStyles';
import dimensions from "../theme/dimensions";

const Card = ({item}) => {
    const {name, title, description} = item
    // console.log('here', item)
    return (<View>
        <View style={styles.content}>
            <View style={styles.rowContent}>
                <View style={styles.firstWidth}/>
        <Text style={styles.containerWidth}>Title</Text>
        <Text>-</Text>
        <View style={styles.firstWidth}/>
        <View style={styles.lastWidth}>
        <Text style={styles.text}>{title}</Text>
        </View>
        </View>
        <View style={styles.rowContent}>
        <View style={styles.firstWidth}/>
        <Text style={styles.containerWidth}>Posted By</Text>
        <Text>-</Text>
        <View style={styles.firstWidth}/>
        <View style={styles.lastWidth}>
        <Text style={styles.text}>{name}</Text>
        </View>
        </View>
        <View style={styles.rowContent}>
        <View style={styles.firstWidth}/>
        <Text style={styles.containerWidth}>Description</Text>
        <Text>-</Text>
        <View style={styles.firstWidth}/>
        <View style={styles.lastWidth}>
        <Text style={styles.text}>{description}</Text>
        </View>
        </View>
        </View>
        </View>)
}


export default Card

const styles = StyleSheet.create({
    content : {
    marginTop : dimensions.twenty,
    height : 110,
    backgroundColor : colors.white,
    justifyContent : 'center'
    },
    rowContent :{
        flexDirection : 'row',
        flexWrap: 'wrap'
    },
    containerWidth : {
        width : '30%'
    },
    firstWidth : {
        width : '10%'
    },
    text : {
    fontWeight : '500',
    textAlign : 'center',
    
    },
    lastWidth: {
        width : '45%'
    }
    
    
})