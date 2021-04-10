import React from 'react';

// Native Componentes Import
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// Styles
import { fonts } from '../../styles/base';

const GamePreviewContainer = ({ img, onPress, name }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={img} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        width: '95%',
        backgroundColor: 'white',
        margin: 5,
        /* Shadow */
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        /* End Shadow */
    },

    img: {
        width: '100%'
    },

    name: {
        padding: 10,
        fontSize: fonts.md
    }
});

export default GamePreviewContainer;