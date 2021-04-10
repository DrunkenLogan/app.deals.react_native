import React from 'react';

// Native Components
import { StyleSheet, Text, View } from 'react-native';

// Util Functions
import { proper } from '../../util/util';

// Styles
import { fonts } from '../../styles/base';

export default function DifficultyMenu({ difficulty, changeDifficulty }) {
    const Item = ({ text }) =>
        <Text
            style={[styles.modeItem, difficulty === text && styles.selected]}
            onPress={() => changeDifficulty(text)}
        >{proper(text)}</Text>

    return (
        <View style={styles.mode}>
            <Item text="easy" />
            <Item text="medium" />
            <Item text="hard" />
        </View>
    )
}

// Styles
const styles = StyleSheet.create({
    mode: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'black',
        marginTop: 30,
        padding: 15
    },

    modeItem: {
        color: 'white',
        fontSize: fonts.sm
    },

    selected: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
})