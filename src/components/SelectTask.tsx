import { StyleSheet, Text, View } from "react-native";

import React from 'react';
import TouchableButton from './TouchableButton';
import colors from '../theme/colors';
import commonStyles from "../theme/styles/commonStyles";
import dimensions from "../theme/dimensions";

const SelectTask = ({navigation}) => {

    const goToScreen = (param) => {
        navigation.navigate(param)
    }
    return(<View style={commonStyles.container}>
        <View style={commonStyles.content}>
        <Text style={styles.containerText}>What You Want To Do?</Text>
        <TouchableButton buttonStyle={styles.buttonContainer} textStyle={styles.buttonTextStyle} buttonText="Post Query" onPress={() => goToScreen('Home')}/>
        <Text style={styles.ortextStyle}>OR</Text>
        <TouchableButton buttonStyle={styles.buttonContainer} textStyle={styles.buttonTextStyle} buttonText="Read Messages" onPress={() => goToScreen('Messages')}/>
        </View></View>)
}


export default SelectTask

const styles = StyleSheet.create({
    containerText : {
    fontSize : dimensions.fourty,
    textAlign : 'center',
    marginTop : dimensions.thirty
    },
    ortextStyle : {
        textAlign : 'center',
        marginTop : 10,
        fontSize : dimensions.thirty
    },
    buttonContainer : {
        height : dimensions.fifty,
        backgroundColor : colors.themeColor,
        justifyContent : 'center',
        borderRadius : 5,
        marginTop : dimensions.twenty
      },
      buttonTextStyle : {
        color : colors.white,
        textAlign : 'center',
        fontSize : dimensions.twenty
      }
})