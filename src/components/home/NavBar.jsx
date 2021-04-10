import React from 'react';

// Native Components Import
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// Custom Components
import HomeIcon from './HomeIcon';

const NavBar = ({ backToHome }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => backToHome(0)}>
                <HomeIcon style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        height: 95
    }
});

export default NavBar;