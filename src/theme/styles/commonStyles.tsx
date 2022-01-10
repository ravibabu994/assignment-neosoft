import {StyleSheet} from 'react-native'
import colors from '../colors'
import dimensions from '../dimensions';

const commonStyles = StyleSheet.create({
    placeHolderStyle : {
        borderWidth : 1,
        marginBottom : dimensions.twenty,
        padding : dimensions.ten,
        borderColor : colors.borderColor
    },
    container : {
        flex : 1,
      },
      content : {
        marginTop : 20,
        width : '90%',
        alignSelf : 'center'
      },
})

export default commonStyles;