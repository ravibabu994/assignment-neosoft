import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import TouchableButton from './TouchableButton';
import colors from '../theme/colors';
import commonStyles from '../theme/styles/commonStyles';
import dimensions from '../theme/dimensions';
import { saveToFirebase } from '../services/firebaseFunctions';

const initialData = {
  title : '',
  description : '',
  name : ''
}
const Form = () => {
  const [state, setState] = useState(initialData)

    const submitData = async () => {
     if(!state.title)
     {
     return Alert.alert("Please Enter Title")
     }
     if(!state.name)
     {
      return Alert.alert("Please Enter Your Name")
     }
     if(!state.description)
     {
      return Alert.alert("Please Enter Description")
     }
     const result = await saveToFirebase(state)
     if(result.success)
     {
      Alert.alert("Data Submitted Successfully")
     }
     setState(initialData)
    }
    return (<View style={commonStyles.container}>
      <View style={commonStyles.content}>
      <TextInput placeholder="Enter Title"  style={commonStyles.placeHolderStyle} onChangeText={(text) => setState({...state, title : text})} value={state.title}/>
      <TextInput placeholder="Enter Name"  style={commonStyles.placeHolderStyle} onChangeText={(text) => setState({...state, name : text})} value={state.name}/>
      <TextInput placeholder="Enter Description"  multiline style={[commonStyles.placeHolderStyle, styles.containerHeight]} onChangeText={(text) => setState({...state, description : text})} value={state.description}/>
      <TouchableButton buttonStyle={styles.buttonContainer} textStyle={styles.buttonTextStyle} onPress={submitData} buttonText="Submit"/>
      </View>
      </View>)
}

export default Form;

const styles = StyleSheet.create({

containerHeight : {
  textAlignVertical: 'top',
  height : 100
},
buttonContainer : {
  height : dimensions.fifty,
  backgroundColor : colors.themeColor,
  justifyContent : 'center',
  borderRadius : 5
},
buttonTextStyle : {
  color : colors.white,
  textAlign : 'center',
  fontSize : dimensions.twenty
}
})