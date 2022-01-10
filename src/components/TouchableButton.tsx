import { Text, TouchableOpacity } from 'react-native'

import PropTypes from 'prop-types';
import React from 'react'

const TouchableButton = ({buttonStyle, textStyle, onPress, buttonText}) => {
    return (<TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{buttonText}</Text>
            </TouchableOpacity>)
}

TouchableButton.propTypes = {
    buttonStyle: PropTypes.object,
    textStyle : PropTypes.object,
    onPress: PropTypes.func,
    buttonText : PropTypes.string
  };
export default TouchableButton