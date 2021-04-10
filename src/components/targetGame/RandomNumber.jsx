import React from 'react';
import PropTypes from 'prop-types';

// Native Componentes
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Styles
import { fonts } from '../../styles/base';

export default function RandomNumber({ number, isDisabled, onPress, id }) {

    const handlePress = () => {
        if (isDisabled) return;
        onPress(id);
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={
                [
                    styles.random,
                    isDisabled && styles.selected,
                    { marginVertical: id > 1 && id < 4 ? 60 : 0 } // Only add margin on 3rd and 4th buttons
                ]
            }>{number}</Text>
        </TouchableOpacity>
    )
}

// Proptypes
RandomNumber.propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
};

// Styles
const styles = StyleSheet.create({
    random: {
        width: 100,
        marginHorizontal: 25,
        fontSize: fonts.md,
        backgroundColor: '#999',
        textAlign: 'center'
    },

    selected: {
        opacity: 0.3
    }
});